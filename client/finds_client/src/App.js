import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import history from "./helpers/history";

import Login from "./components/login";
import Home from "./components/home";
import Error from "./components/Error";
import DocumentDetailPage from "./components/DocumentDetailPage";
import MyPage from "./components/myPage";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route path="/detail" component={DocumentDetailPage} />
        <Route exact path="/myPage" component={MyPage} />
        <Route path="/" component={Error} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
