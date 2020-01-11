import React from "react";
import SigninContainer from "./session/signin_container";
import SignupContainer from "./session/signup_container";
import Main from "./main/main"
import HomeContainer from "./home/home_container"
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import DashboardContainer from "./dashboard/dashboard_container";
import NavbarContainer from "./navbar/navbar_container"
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div className='app'>
    <Switch>
      {/* <Redirect from="/dashboard/*" to="/dashboard" /> */}
      {/* <Route exact path="/" component={Main} /> */}
      <AuthRoute path="/signin" className="signin-container" component={SigninContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Route exact path="/" component={HomeContainer} />
      <Redirect to="/" />
      {/* <ProtectedRoute path="/dashboard" component={DashboardContainer} /> */}
      {/* <Route path="/dashboard/*" component={DashboardContainer} /> */}
      {/* <Route path="/dashboard" component={NavbarContainer} /> */}
      {/* <Route path="/" component={NavbarContainer} /> */}
      {/* <Route path="*" component={Main} /> */}
      {/* <AuthRoute expact path="/" component={Main} /> */}
    </Switch>
  </div>
);

export default App;