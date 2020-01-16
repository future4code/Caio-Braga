import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../Home"
import LoginPage from "../LoginPage";
import AppFormPage from "../AppForm";
import TripList from "../Trips/List";
import CreateTrip from "../Trips/Create";
import TripDetails from "../Trips/Details";




export const routes = {
  root: "/",
  application: "/application-form",
  login: "/login",
  createTrip: "/trips/create",
  tripList: "/trips/list",
  tripDetails: "/trips/details"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={HomePage} exact/>
        <Route path={routes.login} component={LoginPage} exact/>
        <Route path={routes.application} component={AppFormPage} exact/>
        <Route path={routes.tripList} component={TripList} exact/>
        <Route path={routes.createTrip} component={CreateTrip} exact/>
        <Route path={routes.tripDetails} component={TripDetails} exact/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
