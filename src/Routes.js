import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './containers/home'
import Survey from './containers/survey'
import Website from './containers/website'
import NextStep from './containers/nextstep'
import Test from './containers/test'
import NotFound from './containers/notfound'
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import AppliedRoute from "./components/AppliedRoute";


export default ({ childProps }) =>
<Switch>
  <AppliedRoute path="/" exact component={Home} props={childProps} />
  <AppliedRoute path="/login" exact component={Login} props={childProps} />
  <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
  <AppliedRoute path="/survey" component={Survey} props={childProps}  />
  <AppliedRoute path="/website" component={Website} props={childProps}  />
  <AppliedRoute path="/website/:id" component={Website} props={childProps}  />
  <AppliedRoute path="/nextstep" component={NextStep} props={childProps}  />
  <AppliedRoute path="/test" component={Test} props={childProps}  />
  { /* 404 Page Below! */ }
  <Route component={NotFound} />
</Switch>;