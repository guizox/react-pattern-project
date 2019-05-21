import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainContainer from "../containers/mainContainer";
import NotFoundContainer from "../containers/notFoundContainer";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainContainer} />
        <Route component={NotFoundContainer} />
      </Switch>
    </Router>
  );
}

export default Routes;
