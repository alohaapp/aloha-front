import React from "react";
import logo from "../../logo.svg";
import Floors from "./Floors";
import "./Maps.scss";

const Maps = () => {
  return (
    <div className="Maps">
      <header className="Maps-header">
        <img src={logo} className="Maps-logo" alt="logo" />
      </header>
      <Floors />
    </div>
  );
};

export default Maps;
