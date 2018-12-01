import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";
import Map from "./";
import { CRUDProvider } from "../../components/CRUDContext";

xit("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <CRUDProvider>
      <StaticRouter initialEntries={["/map/1"]} context={{}}>
        <Map />
      </StaticRouter>
    </CRUDProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
