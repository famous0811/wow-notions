import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./page/home";
import Login from "./page/Login"

const router: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
};

export default router;
