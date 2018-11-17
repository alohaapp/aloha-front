import React, { Component } from "react";
import PropTypes from "prop-types";
import Login from "./Login";

class LoginErrorBoundary extends Component {
  state = {
    loggedIn: false
  };

  componentDidCatch(error) {
    if (error === 401) {
      this.setState({ loggedIn: false });
    } else {
      throw error;
    }
  }

  render() {
    if (this.state.loggedIn) {
      return this.props.children;
    } else {
      return <Login onLogin={() => this.setState({ loggedIn: true })} />;
    }
  }
}

LoginErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired
};

export default LoginErrorBoundary;
