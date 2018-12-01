import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";
import Map from "./";
import { CRUDProvider } from "../../components/CRUDContext";
import { MessageProvider } from "../../components/MessageContext";

xit("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MessageProvider>
      <CRUDProvider>
        <StaticRouter initialEntries={["/map/1"]} context={{}}>
          <Map />
        </StaticRouter>
      </CRUDProvider>
    </MessageProvider>,

    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
