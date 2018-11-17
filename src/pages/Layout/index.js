import "./Layout.scss";
import React, { Fragment } from "react";
import { Columns, Column } from "bloomer";
import "../../assets/logos/logo-corunet.svg";
import "../../assets/logos/logo.svg";

function Layout(props) {
  return (
    <Fragment>
      <Columns className="header" isCentered>
        <Column isSize="1/4">
          <img src="../../assets/logos/logo-corunet.svg" alt="logo-corunet" />
        </Column>
        <Column isSize="2/4">
          <img src="../../assets/logos/logo.svg" alt="logo" />
        </Column>
        <Column isSize="1/4" />
      </Columns>

      <Columns className="main-container" isCentered>
        <Column className="sidebar" isSize="1/4">
          {props.sidebar}
        </Column>
        <Column className="content" isSize="3/4">
          {props.content}
        </Column>
      </Columns>
    </Fragment>
  );
}

export default Layout;
