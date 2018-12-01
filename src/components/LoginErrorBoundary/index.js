import React, { Component } from "react";
import PropTypes from "prop-types";
import Login from "./Login";

class LoginErrorBoundary extends Component {
  // TODO: after a real API login, we can remove constructor and add:
  state = { user: null };

  setUser = ({ name, userName, imageId }) => {
    this.setState({
      user: {
        userName,
        name,
        imageId
      }
    });
  };

  componentDidCatch(error) {
    if (error.message === "401") {
      this.setState({ user: null });
    } else {
      throw new Error(error);
    }
  }

  render() {
    const { user } = this.state;
    if (user) {
      return React.cloneElement(React.Children.only(this.props.children), {
        user
      });
    } else {
      return <Login onLogin={this.setUser} />;
    }
  }
}

LoginErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired
};

export default LoginErrorBoundary;
