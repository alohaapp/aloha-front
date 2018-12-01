import "./Layout.scss";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Columns, Column } from "bloomer";
import logoCorunet from "../../assets/logos/logo-corunet.svg";
import logo from "../../assets/logos/logo.svg";
import FilterToolbar from "./FilterToolbar";
import UserBadge from "./UserBadge";

function Layout(props) {
  return (
    <Fragment>
      <Columns className="header">
        <Column className="logo-company">
          <Link to="/">
            <img src={logoCorunet} alt="logo-corunet" />
          </Link>
        </Column>
        <Column className="logo-app" isSize="2/4">
          <img src={logo} alt="logo" />
        </Column>
        <Column className="user-link" isSize="2/4">
          <UserBadge />
        </Column>
      </Columns>

      <Columns className="main-container is-8">
        {props.sidebar ? (
          <Column className="sidebar" isSize="1/4">
            {props.sidebar}
          </Column>
        ) : null}
        <Column className="content">
          <FilterToolbar isMap={Boolean(props.isMap)} />
          {props.content}
        </Column>
      </Columns>
    </Fragment>
  );
}

export default Layout;
