import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";
import Map from "./";
import { CRUDProvider } from "../../components/CRUDContext";
import { FilterProvider } from "../../components/FilterContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <CRUDProvider>
      <FilterProvider queryString={""}>
        <StaticRouter initialEntries={["/map/1"]} context={{}}>
          <Map />
        </StaticRouter>
      </FilterProvider>
    </CRUDProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
