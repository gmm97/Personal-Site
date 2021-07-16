## Introduction

The US telecommunications industry is a an ideal example of an oligopolistic industry, where a few major players (namely AT&T Mobility, Verizon Wireless, T-Mobile US and Sprint) hold most of the industry market share and compete based on non-price strategies such as service (although that's questionable!) and regional coverage. Seeing as the market is so large and diversified and the barriers to entry for entrants are extremely high, the companies are therefore monitored closely by the US authorities for any anti-competitive behaviour. On 1 April 2020, T-Mobile and Sprint embarked upon a USD 26.5bn merger, citing the large capital costs required for expansion into domestic markets as the main driving force for the merger. In light of these new circumstances, this project aims to model the market share distribution in the US telecommunications industry according to the competitive Lotka-Volterra model. Particle Swarm Optimisation (PSO) is implemented in MATLAB to perform the modelling and the results are interpreted both mathematically and qualitatively.

## Details

You can access the entire report [here](https://drive.google.com/drive/folders/1vTMJECp15-dHbdTqRiPeyZ5JfmTsrWWw?usp=sharing). Feel free to drop me a message if you have any questions!

- ### Literature Review and Data Collection

  1. What is the competitive landscape in the US telecommunications industry like?

  2. What models have been used for market share modelling? How does the Lotka-Volterra model differ from some of the other models out there?

  3. How was data for the market share analysis obtained?

- ### Modelling

  1. Analysis of the system of Lotka-Volterra differential equations and how to generalise the equation to accomodate > 2 distinct species

- ### Numerical Simulation and Model Fitting

  1. How does Particle Swarm Optimization (PSO) work compared to Genetic Algorithms (GA's) and how can we implement PSO in MATLAB?

  2. Phase plots and solutions curves obtained by using PSO to predict the long-term market share of the competitors

- ### Stability and Analysis

  1. Performing linearization of the Lotka - Volterra equations and determining the behaviour of all the equilibria obtained

  2. Using Hirsch's Theorem to show how the limit sets of all equilibria in the positive quadrant lie on the carrying simplex

  3. Showing how non-periodic orbits or strange attractors cannot exist for our Lotka-Volterra system of equations

  4. Using Zeeman's nullcline analysis to determine the nature (attractor, repellor or saddle point) of the interior equilibrium point

  5. Using the community matrix to show that Hopf Bifurcations may exist for this Lotka-Volterra system

  6. Using Zeeman's Geometric Theorem and the Split Lyapunov function to conclude that one firm is likely to be forced out of the market in the future

## Final Words

Wow, that got very technical very quickly. Lucky I had a solid month of reading _a lot_ of research papers and performing _a lot_ of experiments every day to put this all together. Mathematical modelling has always been of particular interest to me and Particle Swarm Optimization is without a doubt the coolest of the optimization methods. It has very few hyperparameters to optimize (and if you've every worked with neural networks, you'll understand why that can be a real pain) and is extremely flexible. But most of all, it does not require the optimized function to be differentiable, meaning it's able work on just about any surface you can imagine. The actual algorithm is modelled based on the behaviour of bird and insects inside a swarm; an amazing article on the subject can be found [here](https://towardsdatascience.com/particle-swarm-optimization-visually-explained-46289eeb2e14). Nevertheless, keep in mind the optimization has a degree of randomness, so you may not end up with the exact same results as I did!
