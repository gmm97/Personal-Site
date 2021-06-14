import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectNavigation from "./pages/ProjectDescriptionPages";
import GlobalStyle from "./globalstyles/globalstyles";
import ScrollRestoration from "react-scroll-restoration";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollRestoration />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project">
            <ProjectNavigation />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
