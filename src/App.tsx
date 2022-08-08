import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./globalstyles/globalstyles";
import Spinner from "./components/ReusableComponents/LoadingSpinner";

const ProjectNavigation = lazy(() => import("./pages/ProjectDescriptionPages"));

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/project" component={ProjectNavigation} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
