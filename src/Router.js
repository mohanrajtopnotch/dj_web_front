import React from "react";
import { Route , Switch } from "react-router-dom";
import {
  SignUpScreen,
  LoginScreen,
  AdminScreen,
  HomeScreen,
} from "./components/webviews/index";
export default function Router() {
  return (
      <Switch>
        <Route exact path="/" component={ LoginScreen } />
        <Route exact path="/signup" component={SignUpScreen} />
        <Route exact path="/admin" component={AdminScreen} />
        <Route exact path="/home" component={HomeScreen} />
      </Switch>
  );
}
