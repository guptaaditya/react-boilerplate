import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Login from 'components/login/login';
import Login1 from 'components/login/login1';
import Login2 from 'components/login/login2';
import Dashboard from 'modules/dashboard/dashboard';

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to={{ pathname: "/login" }} />
          </Route>
          <Route exact path="/login1">
            <Login />
          </Route>
          <Route exact path="/login2">
            <Login1 />
          </Route>
          <Route exact path="/login">
            <Login2 />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
  );
}

function Topics() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
