import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Route from "./lib/router/Route";
import Home from "./components/Home";
import About from "./components/About";
import Router from "./lib/router/Router";
function App() {
  return (
    <Router>
      <Route path="/about" component={<Home />}></Route>
      <Route path="/home" component={<About />}></Route>
    </Router>
  );
}

export default App;
