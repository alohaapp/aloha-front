import React, { Component } from "react";
import logo from "../../logo.svg";
import "./Maps.scss";

class Maps extends Component {
  render() {
    return (
      <div className="Maps">
        <header className="Maps-header">
          <img src={logo} className="Maps-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Maps;
