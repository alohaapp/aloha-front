import "./NotFound.scss";

import React, { Component } from "react";
import LaCosa from "../../assets/img/lacosa.gif";
import { Link } from "react-router-dom";
import logoCorunet from "../../assets/logos/logo-corunet.svg";
import logo from "../../assets/logos/logo.svg";
import { Columns, Column } from "bloomer";
import UserBadge from "../Layout/UserBadge";

class NotFound extends Component {
  render() {
    return (
      <>
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
        <Columns>
          <Column>
            <div className="NotFound">
              <h2>
                Page not found...{" "}
                <span role="img" aria-label="404">
                  😞
                </span>
              </h2>
              <img src={LaCosa} alt="404" />
            </div>
          </Column>
        </Columns>
      </>
    );
  }
}

export default NotFound;
