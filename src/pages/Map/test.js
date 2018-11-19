import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";
import Map from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StaticRouter initialEntries={["/map/1"]} context={{}}>
      <Map />
    </StaticRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
