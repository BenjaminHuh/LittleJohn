import React from "react";
import SigninContainer from "./session/signin_container";
import SignupContainer from "./session/signup_container";
import Main from "./main/main"
import { AuthRoute } from "../util/route_util";
import WelcomeContainer from "./welcome/welcome_container";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div className='app'>
    {/* <Switch> */}
    <Route exact path="/" component={Main} />
    <Route exact path="/welcome" component={WelcomeContainer} />
    <AuthRoute path="/signin" className="signin-container" component={SigninContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    {/* </Switch> */}
  </div>
);

export default App;