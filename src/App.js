import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";

import Main from "./main.js";
import Sim from "./simulation.js";

export default function Engine() {
  return (
    <Router>
      <div id="App">
        {/* Screens */}
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/simulation" exact component={Sim} />
        </Switch>
      </div>
    </Router>
  );
}
