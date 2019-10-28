import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import history from "./helpers/history";

import Login from "./components/login";
import Home from "./components/home";
import Error from "./components/Error";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={Error} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
