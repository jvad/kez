import React from "react";
import LandingPage from "./LandigPage";
import Gallery from "./Gallery";
import About from "./About";
import { Switch, Route } from "react-router-dom";
import Contact from "./Contact";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Main;
