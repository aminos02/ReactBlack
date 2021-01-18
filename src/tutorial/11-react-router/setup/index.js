import React from "react";
// react router
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/People">
          <People />
          </Route>
        <Route path="/Person/:id" children={<Person/>}></Route>

        <Route path="*">
        </Route>
          <Error />
      </Switch>
      <Route path="/Error"></Route>
    </Router>
  );
};

export default ReactRouterSetup;
