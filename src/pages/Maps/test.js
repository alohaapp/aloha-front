import React from "react";
import ReactDOM from "react-dom";
import Maps from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Maps />, div);
  ReactDOM.unmountComponentAtNode(div);
});
