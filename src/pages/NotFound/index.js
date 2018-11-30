import "./NotFound.scss";

import React, { Component } from "react";
import LaCosa from "../../assets/img/lacosa.gif";

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <h2>
          Page not found...{" "}
          <span role="img" aria-label="404">
            😞
          </span>
        </h2>
        <img src={LaCosa} alt="404" />
      </div>
    );
  }
}

export default NotFound;
