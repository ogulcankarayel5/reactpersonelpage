import React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./landingpage";
import Cv from "./cv";
import Portfolyo from "./portfolyo";
import Contact from "./contact";
import Blog from "./blog";

const Main = () => (
  <Switch>
    <Route path="/" exact component={LandingPage} />
    <Route path="/cv" component={Cv} />
    <Route path="/portfolyo" component={Portfolyo} />
    <Route path="/contact" component={Contact} />
    <Route path="/blog"  component={Blog} />
  </Switch>
);

export default Main;
