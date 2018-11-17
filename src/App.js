import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Maps from "./pages/Maps";
import Workers from "./pages/Workers";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect path="/" exact to="/maps" />
          <Route exact path="/maps" component={Maps} />
          <Route exact path="/workers" component={Workers} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
