import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./page/home";

const router: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default router;
