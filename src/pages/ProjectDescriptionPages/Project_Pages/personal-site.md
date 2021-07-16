## Introduction

Well, I would post a link to this site but that would be a bit pointless, right?

Anyways, I've had some experience in making traditional websites with HTML, CSS and plain Javascript before, but I wanted to find out why React is so popular among front-end developers. All those terms like the _virtual dom_ that people kept throwing around didn't help me understand the power of React one bit! After developing this website (and some other projects) using React, I can confidently say that I find React amazing because of how _easy_ it makes life! Specifically, with regards to the following:

- It is _so_ much easier to structure your files. React works with rendering JSX components on the screen - JSX is "Javascript React", a blend of HTML and Javascript arranged into components which you render onto the screen. This ensures you don't normally run into the problem with poorly-structured code causing your HTML elements to be affected by different chunks of vanilla Javascript from different files. You lose a bit of flexibility in the way you can structure your projects, but you gain so much peace of mind knowing that everything you need is right in front of you :)

- You can write controllable components with far less code, making simple user interaction really easy to customize. I shudder at how long it would have taken me to write the interactive timeline component on this website's home page if I hadn't used React.

- It has very few trade-off's. Earlier, issues such as poor Search Engine Optimization (SEO) rankings used to be a issue for large code bases. Nowadays, you can use Server Side Rendering with frameworks such as [Next.js](https://nextjs.org/) to improve performance tremendously, while keeping your site all the way at the top of Google's rankings.

- At the risk of repeating myself, React is just _so easy_! Learning the way it works in-depth took me time, but the learning curve is gentle and the core features are here to stay. Once you get the hang of using Hooks and with a solid Javascript foundation, it won't take more than a few weeks to get up and running with your own projects.

## Details

I've used typical React for this site and the entire code can be found on my [GitHub](https://github.com/gmm97/Personal-Site) page. Nevertheless, I thought I'd share a bit about some of the features and libraries of React and JS that I've found exceptionally useful for simple single page applications like the one I've designed here. So, if you like the way this site is put together, feel free to read on :)

### Styled Components

Remember how I mentioned how much I loved that React combines both HTML and JS into a single, easy-to-structure component written in JSX? Well, someone loved it so much they decided to create this library, which allows you to combine CSS rules with JSX components too! What you end up writing is a single file consisting of _everything_ you need to get the component presentation-ready. By writing CSS bound to individual components and providing an interface for dynamically styling components based on React props, styled components makes the CSS faster, more intuitive and a lot easier to debug. I don't think I can ever go back to standard React now.

### React Markdown

I chose to use React Markdown to write all these simple project pages since it allows you to format your text, images and lists in a simple manner. In fact, writing all these pages in markdown allowed me to do away with all the <p> and <a> tags and formatting issues I would have faced otherwise. It also comes with a lot of cool plugins such as React SyntaxHighlighter, which allows you to perform syntax highlighting of code snippets you wish to include. Furthermore, it's also really easy to use and very plug-and-play. To get all these project pages working, I used React lazy loading to dynamically import the markdown component and show it to you. Try refreshing this page (don't press the back button) and you'll see a slight pause before the markdown is rendered (I added a blue spinner to make it look more presentable). Anyways, here's the code I used to show the markdown component on the screen:

```jsx
// Other imports
...
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import materialLight from "react-syntax-highlighter/dist/cjs/styles/prism/material-light";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("jsx", jsx);
  ...
  // Declare component
  // Initialize state to store the fetched markdown
  // Adjust the way code is shown by taking all "code" snippets in the markdown
  // file and passing it to SyntaxHighlighter
  const customRenderers = {
    code(code: any) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter
          language={language}
          children={children}
          style={materialLight}
        />
      );
    },
  };

  useEffect(() => {
    let linkName = projectEntry.LinkName;
    // Fetch the markdown and store it in state upon page load
    const fetchMarkdown = async () => {
        // Implementation of dynamic importing
        ...
    }
    fetchMarkdown();
  }, []);

  return (
      ...
      <MarkdownWrapper>
        <ReactMarkdown
          children={currentMarkdown}
          components={customRenderers}
        />
      </MarkdownWrapper>
      ...
};
```

Really easy, right? You can check out my [GitHub](https://github.com/gmm97/Personal-Site) to have a look at how the dynamic importing was implemented.

### TypeScript

TypeScript is a JS library which allows us to implement static typing in JS (and by extension, React). When we pass down props from one component to another in JS or invoke functions, it is extremely likely that we may make a spelling error or pass down an incorrect argument somewhere. Typescript aims to prevent this by performing static type checking at compile time (not run time); all our type checking is eliminated upon compilation and the typescript compiler (tsc) just spits out plain old javascript. This doesn't just work for our own code; in fact, most npm libraries have included type definition files which will check that we aren't accidentally referencing a property on an object which doesn't exist. How useful is that!

Still not convinced? Let's take a look at a simple example of when TS came in really useful in making this website! If you go back to the main page and reload the website, you'll see a lovely pink animation on the headers as you scroll past. Obviously, since this is a responsive website, the position of the headers on each page may change as you adjust the height of the components such as the timeline. I therefore needed to listen for any resize events _after_ the initial render as well, and I used the _useReducer_ hook to keep track of the location of the headers in each component:

```jsx
export type ActionTypes =
  | { type: "about", payload: number }
  | { type: "work", payload: number }
  | { type: "projects", payload: number }
  | { type: "contact", payload: number }
  | { type: "bottom", payload: number };
```

The type above just corresponds to the name of the section, while the payload is the distance of the header from the top of the page. Going now to our useReducer hook:

```jsx
const reducer = (state: ReducerState, action: ActionTypes): ReducerState => {
  switch (action.type) {
    case "about":
      return {
        ...state,
        aboutHeight: action.payload,
      };
  ... //  other cases
```

Notice how the action in the function argument has a " : ActionTypes" beside it; that's the type annotation for the action, and defines the possible values that each action must have. We know from our exported type above that the action.type can either be "about", "work", "projects", "contact" or "bottom". TypeScript would then look through all our cases in the reducer above and double check that we haven't made any mistakes in specifying an action that doesn't exist! Of course, it would also check the state, output and input because of all the types and interfaces I have used (but have not shown here), but that's a topic for another day!

## Final Words

I have worked with Typescript and Markdown in the past, but this is the first time I've tried working with styled components and I love just how structured, organised and _easy_ it makes everything to follow. After completing most of this project, I've begun to design an e-commerce application using a Microservices-style approach as well. I've tried using styled components with Nextjs and everything is exactly how I remember it; getting TypeScript to work, on the other hand, was a pain. Enough for now though, please check out my microservices project if you're interested in finding out more!
