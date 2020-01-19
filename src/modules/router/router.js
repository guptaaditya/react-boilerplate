import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from 'components/login/login';

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to={{ pathname: "/login" }} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}