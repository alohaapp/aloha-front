import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Maps from "../Maps";
import Login from "../Login";
import NotFound from "../NotFound";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Switch>
          <Redirect path="/" exact to="/maps" />
          <Route exact path="/maps" component={Maps} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Main;
