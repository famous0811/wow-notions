import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./page/home";
import Test from "./page/test";

const router: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={Test} />
      </Switch>
    </Router>
  );
};

export default router;
