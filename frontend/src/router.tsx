import React from "react";
import { Route, BrowserRouter as Switch } from "react-router-dom";

import Home from "./page/Home";

const router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default router;
