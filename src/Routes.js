import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './containers/home'
import Survey from './containers/survey'
import Website from './containers/website'
import NextStep from './containers/nextstep'
import Test from './containers/test'


export default () =>
  <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/survey" component={Survey} />
     <Route path="/website" component={Website} />
     <Route path="/nextstep" component={NextStep} />
     <Route path="/test" component={Test} />
  </Switch>;