import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";

export default function Routes(props) {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={() => (
        <Home expenses={props.expenses} />
   )}
      />
      
      <Route path="/add" component={Add} />
    </Switch>
  );
}
