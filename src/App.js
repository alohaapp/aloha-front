import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Map from "./pages/Map";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default () => {
  const renderMap = ({ match }) => {
    return <Map floorId={match.params.floorId} />;
  };
  return (
    <Router>
      <Switch>
        <Redirect path="/" exact to="/map" />
        <Route exact path="/map" render={renderMap} />
        <Route exact path="/map/:floorId" render={renderMap} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
