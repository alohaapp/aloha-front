import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import LoginErrorBoundary from "./components/LoginErrorBoundary";
import { CRUDProvider } from "./components/CRUDContext";

ReactDOM.render(
  <LoginErrorBoundary>
    <CRUDProvider>
      <App />
    </CRUDProvider>
  </LoginErrorBoundary>,
  document.getElementById("root")
);
