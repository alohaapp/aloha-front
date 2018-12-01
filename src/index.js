import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import LoginErrorBoundary from "./components/LoginErrorBoundary";
import { CRUDProvider } from "./components/CRUDContext";
import { MessageProvider } from "./components/MessageContext";

ReactDOM.render(
  <MessageProvider>
    <LoginErrorBoundary>
      <CRUDProvider>
        <App />
      </CRUDProvider>
    </LoginErrorBoundary>
  </MessageProvider>,
  document.getElementById("root")
);
