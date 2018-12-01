import "material-design-icons/iconfont/material-icons.css";
import QueryString from "query-string";
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
    return (
      <Map
        officeId={+match.params.officeId}
        floorId={+match.params.floorId}
        filters={QueryString.parse(location.search)}
      />
    );
  };
  const renderWorkwers = ({ location }) => {
    return <Workers filters={QueryString.parse(location.search)} />;
  };

  return (
    <Router>
      <Switch>
        <Redirect path="/" exact to="/map" />
        <Route exact path="/map" render={renderMap} />
        <Route exact path="/map/:officeId" render={renderMap} />
        <Route exact path="/map/:officeId/:floorId" render={renderMap} />
        <Route exact path="/workers" component={renderWorkwers} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
