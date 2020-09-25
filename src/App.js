import React from "react";
import {} from "react-bootstrap";
import Home from "./Home";
import Register from "./Register";

import Login from "./Login";
import Navbar from "./Navbar";
import Menu from "./Menu";

import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/menu" component={Menu} />

        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
