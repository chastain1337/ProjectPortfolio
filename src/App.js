import React, { useState, useEffect } from "react";
import "./App.css";
import Head from "./components/Head";
import Resume from "./components/Resume";
import { HashRouter, Route } from "react-router-dom";
import Projects from "./components/Projects";
//import Projects from "./components/Projects";

function App() {
  return (
    <HashRouter basename="/">
      <>
        <Route path="/" component={Head} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Projects" component={Projects} />
      </>
    </HashRouter>
  );
}

export default App;
