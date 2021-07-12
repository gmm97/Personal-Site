## Introduction

_A quick note to start off with: since this project is part of my work at Deloitte, I will not be able to provide the code and internal paper associated due to IP reasons. If you really want to take a look, please contact me directly and I can seek clearance from the relevant authorities._

So what is Structural Equation Modelling, really? That was the exact question I googled when I got assigned as a data engineer/analyst to Deloitte's risk management team. Now, a few months later, I feel confident enough to provide a definition which encapsulates the key points of this technique while leaving out the technical mumbo-jumbo:

_Structural Equation Modelling (SEM) is a statistical technique which allows us to analyse relationships between what different groups of measured variables represent._

Was that alright to follow? Well, let's try to formalize what I just mentioned using a simple example:

![](https://upload.wikimedia.org/wikipedia/commons/b/b1/Example_Structural_equation_model.svg)

Let's assume we wish to measure the impact of intelligence on academic performance; how would we go about doing that? Well, we cannot find an absolute measure of intelligence directly using any kind of "intelligence brain scan", so we need to rely on some commonly measured metrics such as IQ tests, intelligence scales (such as the one [here](https://en.wikipedia.org/wiki/Wechsler_Adult_Intelligence_Scale)) etc to gauge a person's intelligence. The same goes for academic performance; it is multi-faceted, and we require multiple scores such as SAT, High School GPA and ACT score to gauge how strong an individual is academically. This relationship is observed between variables everywhere, and the structure is always the same; we frequently come up with a set of _measured variables_ to construct a representation for a _latent variable_ we wish to truly measure.

But what does any of this have to do with SEM? Well, let's say that we are trying to understand how intelligence, a latent variable, correlates with academic performance, another latent variable. First, we focus on grouping these measured variables into "buckets" of latent variables - in the example above, this is fairly obvious, but it might not be for a lot of different cases. We can confirm our groupings make sense by looking at some reliability metrics (such as [alpha](https://stats.idre.ucla.edu/spss/faq/what-does-cronbachs-alpha-mean/)), which measure the internal consistency of variables in a group. We can even use techniques such as exploratory factor analysis (EFA) to find the factor loadings - which are the regression coefficients between measured and latent variables - to understand the natural groupings of the variables and the latent factor they represent. Once we have some preliminary groupings, we come up with relationships between the latent variables. Specifically, we can have 3 types of relationships:

1. Associative: A bi-directional relationship which shows correlation/covariance

2. Direct: An independent variable directly affects a direct variable

3. Indirect: An independent variable affects another variable through another third, intermediate variable

[Here](https://www.lexjansen.com/wuss/2006/tutorials/TUT-Suhr.pdf) is the link to an excellent SEM guide which got me up and running all those months ago. Now, once we have the variable groupings, we construct a model like in the example above. In the example, we hypothesise that intelligence has a direct impact on academic performance, as evident by the right arrow from intelligence to academic performance. In order to validate our model, we then perform confirmatory factor analysis (CFA) to test whether the factors and relationships we have modelled are consistent with the data. Literature on this topic is fairly extensive, but it boils down to using specific metrics (called _goodness of fit indices_) alongside adjustment metrics (_modification indices_) to find a suitable model from both a qualitative and quantitative perspective.

Finally, once we have a model which seems reasonable, we perform path analysis to determine the relationship between the latent variables. Path analysis is similar to hierarchical multiple regression, but produces regression coefficients (also called path coefficients) which indicate the extent to which one latent variable affects another (in our example above, the path coefficient would be 0.8). This is just a brief overview, and I particularly like [this](http://core.ecu.edu/psyc/wuenschk/MV/SEM/Path.pdf) paper which gives an in-depth analysis of what path analysis is all about.

## Details

_None of these details are confidential, since the research was done for an NPO and has been published as of 2021_

Working in conjunction with [NVPC](https://cityofgood.sg/), we were tasked to develop a framework for modelling organisational board performance based on 57 metrics collected from 360 respondents. The questions ranged from general questions about job satisfaction and vision to more detailed ones about the company's revenue, expenses and employee salary. The actual survey was divided into the following 3 major sections:

1. Functional: Represents how effectively the organisation is able to function as a business unit

2. Collective: Represents how effectively different departments within the organisation are able to function

3. Individual: Represents how effectively individual employees within the organisation are able to conduct their work

Inside each of these sections, various questions were posed on a 7-point Likert Scale to the respondents, and the responses constitute the measured variables provided to us for analysis using SEM.
