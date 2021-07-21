## Introduction

_This article is originally based on the amazing course Microservices with Node JS and React by Stephen Grider. I'm working on extending the front-end and making additional microservices using Django_

So what are microservices exactly? Well, it's a way to develop distributed software systems which focuses on keeping each individual _service_ to a single objective. However, to explain the benefits which microservices bring exactly, let's take a look at this realistic example:

1. A team of developers starts working on a monolithic application. The application logic is hosted on a few servers which connect to a database directly and are exposed via REST API's to the frontend.

2. The application begins to scale, as more and more developers join the team and more and more servers are added. It becomes harder to track who is working on which part of the application and the effects which changing one service can have on other parts of the service.

3. A developer works on an important service and deploys the changes, but the tests written are not exhaustive enough to capture the error during testing. The deployment causes another part of the application to throw errors, and the servers are unable to process any further requests from the frontend.

4. There remains a long downtime while engineers try to rollback the changes and detect the flaw in application logic which led to the failure. During this process, the entire service is offline. The developers need to deploy the entire application once the issue has been resolved.

So now, let's look at the main problems that arose in this scenario and how a microservices-based approach can address some of those problems:

- **Scalability**: We saw in the earlier example that the developers needed to scale the entire application by increasing the number of servers holding the application logic. However, it usually suffices to scale only a particular component of the application which has to handle many incoming requests; microservices allows us to scale _each part_ of the component individually, thus giving us additional flexibility in the computing power required to host the application.

- **Convenience**: As more and more developers join the team, some may be more familiar in working with certain tech stacks than others. In the monolithic codebase, the application logic can only be written in one programming language, but a microservices approach allows for different services to be written in completely different languages as long as the REST API endpoints of each service are exposed to other services.

- **Fault Tolerance**: It's true that most developers use some kind of static type checking (like Typescript) in their large codebases, but speaking from personal experience, it's _really hard_ to make sure you cover all cases of failure reasonably well. Sometimes, making changes to a certain service can affect the core application logic in a non-obvious way, and cause an application-wide failure. Microservices have two main advantages when it comes to this aspect: Firstly, the rest of the services within the microservices application still work perfectly, so the users are able to access every service except the one which has gone down. Secondly, it is much easier to isolate the service which has led to the outage, allowing engineers to rectify the issue much more quickly.

- **Deployment**: In a monolithic architecture, even a small change in a service necessitates a complete redeployment of the application. A microservices approach ensures that only services which have been modified are redeployed.

This being said, microservices also have some inherent difficulties; primarily relating to communication between different services in the application and duplication of code across different services. Remember, services inside a microservices application are supposed to be _completely independent_ from one another, so some amount of duplication is unavoidable. Instead of dwelling too much on microservices at a high level though, let me dive into my implementation and explain some key points along the way.

## Details

The microservices application consists of a few core components; I've outlined the function of each component in its own respective section below:

### High-Level Architecture

At a high level, the e-commerce application consists of a few core components. The user must be able to signup/signin, so there is an authentication service which handles the signup / signin flow. To create the frontend, Nextjs is used for server-side rendering (SSR), so a separate service (client) was implemented for that. Users are also able to create listings for items they want to sell (the tickets service) and create orders consisting of multiple tickets posted by other users on the same platform (the orders service). These services were containerized using Docker and developed inside a single Kubernetes cluster. I won't go into too much depth here, but [Kubernetes](https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/containers/aks-microservices/aks-microservices) is an excellent container orchestration service which handles the management, scaling and deployment of microservices applications.

### Initial Setup

Setting up kubernetes eventually boils down to a few key observations:

- Since docker containers (which are orchestrated by kubernetes) are resource-isolated components, we need a way to deploy any changes we make during development to the cluster immediately. We could always build the docker image again and push it to docker hub (where kubernetes will pull the image from the remote registry and rebuild it for us), but a CI-CD pipeline would be _much_ more efficient. [Skaffold](https://skaffold.dev/) is currently the best option for syncing files from a local development environment to a kubernetes cluster, so I decided to go with that!

- In order to tell kubernetes which services should be deployed inside the cluster, we need to create kubernetes deployment files. These files specify the docker image to deploy inside the cluster alongside a _cluster endpoint_, which is a special kind of service endpoint we can use to expose service pods in each cluster to external traffic. Along with this cluster endpoint, we also use [NGINX-Ingress-Controller](https://kubernetes.github.io/ingress-nginx/), which functions as an API gateway and manages external access to services within a cluster. It allows us to define routing rules as such:

```yaml
spec:
  rules:
    # the host is the domain the controller is listening at
    # in development, this is redirected to localhost ip 127.0.0.1 since the cluster is on our own computer
    - host: commerce.dev
      http:
        paths:
          # this defines the routing rules. If we get a request to commerce.dev/api/users/[ANYTHING]
          # we redirect it to the auth service (which has a cluster endpoint setup to accept incoming HTTP requests on port 3000)
          - path: /api/users/?(.*)
            backend:
              serviceName: auth-srv
              servicePort: 3000
          # this is a catch-all route which redirects requests to the client service. The client service holds the
          # nextjs part of the application which is rendered on the server and shown to the user
          - path: /?(.*)
            backend:
              serviceName: client-srv
              servicePort: 3000
```

We can also use nodeport services and load balancers to communicate with pods inside the cluster, but those are normally considered for non-HTTP traffic.

- Remember, we need to run _everything_ inside kubernetes, which includes our database as well! I used the mongo image from dockerhub to create a mongodb pod inside my cluster for every service which required a database. No service should be reaching into another service's database, so some data replication between these databases is to be expected.

### Ensuring reusability of code between services

Remember how I mentioned that microservices allow you to use different tech stacks for different services in the application. That's technically true, but it does come with one small caveat; you can't just reuse the code between services if the language you use is different. It turns out that making code reusable between services in the same language is a lot easier though, and can be accomplished in the following ways:

- Replicating code between services using a direct copy-paste: This definitely isn't favourable since we need to make edits across multiple services when we make a minor change to the reusable component of one service.

- [Git-Submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules): We can include a shared git repository in each of our individual services. This allows us to keep our shared code as an independent project, yet include the repository in any other services which may require it.

- Publishing code as an NPM module to the NPM registry. Then, include this as a dependency to the other services which require this reusable code. Every time we make a change, we should rebuild the shared module and push it off to NPM. We then go to the other services which require this module and update the version number.

Using a git submodule is an approach I want to try out in the future, but publishing reusable code to the NPM registry proved to be easier for a small scale project like the one I was building.

But what kind of code needs to be shared between services anyways? Well, let's take a look at a simple example to look at reusability and error handling:

### Reusability and Error Handling

```typescript
export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // check to see a jwt exists on the session property of the req object
  if (!req.session?.jwt) {
    return next();
  }
  // verify the jwt using the private jwt key
  // if it is correct, set the currentUser as being the id and email of the user logged in
  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = payload;
  } catch (err) {}
  next();
};
```

The above snippet is a small middleware to detect whether the user is authorized when it makes a request to a given API route. We want some actions to be performed only by users who are logged in, so a user is provided a JSON Web Token (JWT) upon successful signin/ signup. This JWT is transported inside a cookie, which is set on the session property of the req object. We can imagine that middlewares like the following (which detects whether a user is authorized) need to be used across almost all API routes in our application (with some exceptions, like the signin and signup route handlers) and therefore should be centralized inside a common NPM module. Imagine if we decided to change the information encoded inside a JWT one day; it would be impractical to go to every service and ensure we make the _exact same_ changes to the properties we are checking.

This brings up an important point related to standardization across different services in a microservice environment as well. Imagine if we were to throw an error from our backend server because the user was not authorized to access a particular route. Naturally, we'd want to send a JSON response to the frontend to indicate to the user that they have insufficient permissions but we need to make sure that the response format is the exact same for each service which throws this error! How else can we expect our frontend to parse the response and pull the relevant properties off the response? And we definitely don't want a situation where the frontend needs to keep track of where the error was thrown and use complicated if-else logic to determine which parameters to pull off! In fact, we should go a step further and try to standardize the format of _every_ error thrown in the backend; our frontend should only need to worry about actually displaying the error message to the user.

We can certainly use typescript to define the format of each error. In this case, we make use of typescript abstract classes to create a template for what an error should look like:

```typescript
export abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
```

We set each error as having a statusCode, which must be a number, along with a serializeErrors method which is an array of objects containing a message and (optional) field property. We can extend this class from any other errors we create. Every time we need to send a response back to the user, we can then invoke our custom error-handling middleware which looks something like this:

```typescript
export const errorHandlingMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
```

Now, the response is guaranteed to be in the same format for every error! As mentioned earlier, we can share this custom middleware across every service using a NPM module, so we are always confident that any errors anywhere inside the application will have the same JSON response sent to the frontend. How cool is that?

### Communication between services

Up to this point, we have setup the kubernetes cluster and have ensured that all services inside the pod can be accessed via HTTP from the outside. But how do we allow the different services inside the pod to communicate with one another? For example, when a user creates a ticket using the tickets service, the orders service needs to be informed of the creation of this ticket so that another user can choose to create an order with this ticket inside. This kind of inter-service communication is achieved using an _asynchronous event bus_. Apache Kafka is perhaps the most well-known example of a distributed streaming platform which offers publisher/subscriber capabilites to different streams of records (and also has a storage system for messages), but I used [NATS](https://docs.nats.io/) alongside [Node-Nats-Streaming](https://www.npmjs.com/package/node-nats-streaming). NATS streaming itself is complicated and I don't want to get too much into the details, but here are some features it offers:

- Events are published by _publishers_ residing inside each service and are received by _subscribers_ in the other other services. These publishers publish an event to a specific _channel_ and subsribers only need to subscribe to the channel(s) which contains events they care about. For example, the authentication service probably doesn't care if a ticket was created, so we don't need it to subscribe to the 'Ticket Created' channel.

- Events on the message bus can be stored in durable storage, so we have a list of historical events published to every channel. In the event of temporary outages of a particular service or addition of a new service, we require the service to process all past events which it has missed.

- If we have multiple copies of the same service, we can have all the services subscribe to the same queue group. NATS Streaming will ensure that a message is delivered to only one member of the queue group.

- Manual acknowledgement ensures that NATS Streaming only acknowledges events after the event has been fully processed by the service. This ensures that events are not lost in cases where the delivery was successful but there was an error during processing.

Asynchronous event buses are hugely customizable and, in addition to the benefits outlined above, offer a couple of main advantages over synchronous communication between services:

- Synchronous communication introduces dependencies between services. If one service fails, other services which reach out to the failed service will be unable to function as well. Remember that the point of using microservices is to keep individual services as independent as possible!

- The entire request will be slowed down significantly, if even _one_ inter-service request is slow.

## Final Words

Wow, told you that was going to be long! I still haven't touched on details such as cluster deployment and microservices testing, but I hope to add in a more in-depth explanation on those topics soon enough! Taking this course and developing my own microservices was an amazing experience, and it taught me a lot about containerization, asynchronous communication between microservices, error handling, deployment, testing, reusability and pretty much programming in general. The 3-ish months I spent on this were amazing fun, so if you'd like to learn more, just drop me a message!
