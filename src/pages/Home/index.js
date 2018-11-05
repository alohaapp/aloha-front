import React, { Component } from "react";
import logo from "../../logo.svg";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Home;
