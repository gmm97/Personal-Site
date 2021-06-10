import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./globalstyles/globalstyles";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
