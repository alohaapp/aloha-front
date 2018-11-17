import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Maps from "./pages/Maps";
import Workers from "./pages/Workers";
import Login from "./pages/Login";
import NewWorker from "./pages/NewWorker";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect path="/" exact to="/maps" />
          <Route exact path="/maps" component={Maps} />
          <Route exact path="/workers" component={Workers} />
          <Route path="/login" component={Login} />
          <Route path="/worker/new" exact component={NewWorker} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
