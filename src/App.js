import React, { useState, useEffect } from "react";
import "./App.css";
import Head from "./components/Head";
import Resume from "./components/Resume";
import { HashRouter, Route } from "react-router-dom";
import Projects from "./components/projects/Projects";
import { default as DecisionMaker } from "./components/projects/decision-maker/components/App.js";

function App() {
  return (
    <HashRouter basename="/">
      <>
        <Route path="/" component={Head} />
        <Route path="/Resume" component={Resume} />
        <Route exact path="/Projects" component={Projects} />
        <Route
          path="/Projects/decision-maker"
          component={() => {
            console.log("matched");
            return <DecisionMaker id="dm" />;
          }}
        />
      </>
    </HashRouter>
  );
}

export default App;
