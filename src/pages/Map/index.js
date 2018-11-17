import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Map = () => {};

export default () => (
  <Switch>
    <Route exact path="/:id" component={Map} />
    <Redirect path="/" exact to="/map" />
  </Switch>
);
