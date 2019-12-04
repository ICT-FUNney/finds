import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import history from "./helpers/history";
import Result from "./components/SearchResultpage";
import Login from "./components/login";
import Home from "./components/home";
import Error from "./components/Error";
import DocumentDetailPage from "./components/DocumentDetailPage";
import MyPage from "./components/myPage";
import TopAppBar from './components/TopAppBar';

function App() {
  var url = window.location.href;
  return (
    <div>

    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route path="/detail" component={DocumentDetailPage} />
        <Route exact path="/result" component={Result}/>
        <Route exact path="/myPage" component={MyPage} />
        <Route exact path="/show" component={DocumentShowPage}/>
        <Route path="/" component={Login} />
      </Switch>
    </ConnectedRouter>
    </div>
  );
}

export default App;
