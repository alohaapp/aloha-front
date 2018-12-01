import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";
import Map from "./";
import { CRUDProvider } from "../../components/CRUDContext";
import { MessageProvider } from "../../components/MessageContext";
import { FilterProvider } from "../../components/FilterContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MessageProvider>
      <CRUDProvider>
        <FilterProvider queryString={""}>
          <StaticRouter initialEntries={["/map/1"]} context={{}}>
            <Map />
          </StaticRouter>
        </FilterProvider>
      </CRUDProvider>
    </MessageProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
