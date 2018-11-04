import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./Router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Router />
        </header>
      </div>
    );
  }
}

export default App;
