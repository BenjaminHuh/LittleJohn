import React from "react";
import SigninContainer from "./session/signin_container";
import SignupContainer from "./session/signup_container";
import Main from "./main/main"
import HomeContainer from "./home/home_container"
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import StockHome from "./stock/stock_home";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
} from 'react-router-dom';

const App = () => (
  <div className='app'>
    <Switch>
      <AuthRoute path="/signin" className="signin-container" component={SigninContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <Route exact path="/" component={HomeContainer} />
      <Route path='/stocks/:ticker' component={StockHome}/>
      <ProtectedRoute path="/stocks" component={StockHome} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;