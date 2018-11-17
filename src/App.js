import React, { useState } from "react";
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
  const [maps, setMaps] = useState([]);
  const renderMap = ({ match }) => {
    return <Map setMaps={setMaps} maps={maps} id={match.params.id} />;
  };
  return (
    <Router>
      <Switch>
        <Redirect path="/" exact to="/map" />
        <Route exact path="/map" render={renderMap} />
        <Route exact path="/map/:id" render={renderMap} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
