import React, { Component } from "react";
import PropTypes from "prop-types";
import Login from "./Login";

// TODO: after a real API login, we don't need sessionStorage anymore
const sessionUser = {
  set: user => window.sessionStorage.setItem("aloha", JSON.stringify(user)),
  get: () => JSON.parse(window.sessionStorage.getItem("aloha"))
};

class LoginErrorBoundary extends Component {
  // TODO: after a real API login, we can remove constructor and add:
  // state = { user: null }
  constructor(props) {
    super(props);
    let user;
    try {
      user = sessionUser.get();
    } catch (e) {
      user = null;
    }
    this.state = { user };
  }

  setUser = ({ name, rol }) => {
    this.setState(
      {
        user: { name, rol }
      },
      () => sessionUser.set(this.state.user)
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
