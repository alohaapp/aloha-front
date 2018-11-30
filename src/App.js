import "material-design-icons/iconfont/material-icons.css";

import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CRUDContext from "./components/CRUDContext";
import Map from "./pages/Map";
import Workers from "./pages/Workers";
import NotFound from "./pages/NotFound";

export default function() {
  const { officesCRUD, floorsCRUD, workersCRUD } = useContext(CRUDContext);

  // on load fetch all the data
  useEffect(
    () => {
      officesCRUD.fetch();
      floorsCRUD.fetch();
      workersCRUD.fetch();
    },
    [
      /* once */
    ]
  );

  const renderMap = ({ match, location }) => {
    const queryString = location.search && location.search.slice(1);
    return (
      <Map
        officeId={+match.params.officeId}
        floorId={+match.params.floorId}
        queryString={queryString}
      />
    );
  };
  return (
    <Router>
      <Switch>
        <Redirect path="/" exact to="/map" />
        <Route exact path="/map" render={renderMap} />
        <Route exact path="/map/:officeId" render={renderMap} />
        <Route exact path="/map/:officeId/:floorId" render={renderMap} />
        <Route exact path="/workers" component={Workers} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
