import React from "react";
import SigninContainer from "./session/signin_container";
import SignupContainer from "./session/signup_container";
import Main from "./main/main"
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import WelcomeContainer from "./welcome/welcome_container";
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
      {/* <Redirect from="welcome/*" to="welcome" /> */}
      <Route exact path="/" component={Main} />
      <AuthRoute path="/signin" className="signin-container" component={SigninContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <ProtectedRoute path="/welcome" component={WelcomeContainer} />
      <Route path="/welcome/*" component={WelcomeContainer} />
      <Route path="/welcome" component={NavbarContainer} />
      <Route path="*" component={Main} />
    </Switch>
  </div>
);

export default App;