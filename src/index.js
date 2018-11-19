import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import LoginErrorBoundary from "./components/LoginErrorBoundary";

ReactDOM.render(
  <LoginErrorBoundary>
    <App />
  </LoginErrorBoundary>,
  document.getElementById("root")
);
