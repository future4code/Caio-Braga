import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../Home"
import LoginPage from "../LoginPage";
import AboutPage from "../About";




export const routes = {
  root: "/",
  application: "/application-form",
  login: "/login",
  about: "/about",
  createTrip: "/trips/create",
  detailsTrip: "/trips/details"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={HomePage} exact/>
        <Route path={routes.login} component={LoginPage} exact/>
        <Route path={routes.about} component={AboutPage} exact/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
