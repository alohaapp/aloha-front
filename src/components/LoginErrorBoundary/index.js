import React, { Component } from "react";
import PropTypes from "prop-types";
import Login from "./Login";

// TODO: after a real API login, we don't need sessionStorage anymore
const sessionToken = {
  set: token => window.sessionStorage.setItem("aloha", token),
  get: () => JSON.parse(window.sessionStorage.getItem("aloha"))
};

class LoginErrorBoundary extends Component {
  // TODO: after a real API login, we can remove constructor and add:
  state = { user: null };

  setUser = ({ name, surName, userName, imageId, token }) => {
    this.setState(
      {
        user: {
          userName,
          name: `${name} ${surName}`,
          imageId
        }
      },
      () => sessionToken.set(token)
    );
  };

  componentDidCatch(error) {
    if (error.message === "401") {
      this.setState({ user: null });
    } else {
      throw error;
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
