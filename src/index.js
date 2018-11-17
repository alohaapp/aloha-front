import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.css";
import "./styles/index.scss";
import App from "./App";
import LoginErrorBoundary from "./components/LoginErrorBoundary";

ReactDOM.render(
  <LoginErrorBoundary>
    <App />
  </LoginErrorBoundary>,
  document.getElementById("root")
);
