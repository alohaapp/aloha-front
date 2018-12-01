import React, { useReducer, useState, useEffect } from "react";
import { API_URL } from "../../../constants";
import reducer, { initialState, login_success, login_error } from "./reducer";
import * as sessionUser from "../../../hooks/session";
import "./Login.scss";
import logoLogin from "../../../assets/logos/logo-login.svg";

function Login(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const checkToken = async user => {
    await fetch(`${API_URL}/Security/check`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });
    dispatch(login_success());
    props.onLogin(user);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await fetch(`${API_URL}/Security/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userName,
        password
      })
    });

    if (response.ok) {
      dispatch(login_success());
      const { userName, name, surName, imageId, token } = await response.json();
      const user = {
        userName,
        name: `${name} ${surName}`,
        imageId
      };
      sessionUser.set({
        ...user,
        token
      });
      props.onLogin(user);
    } else if (response.status === 401) {
      dispatch(login_error("Incorrect username or password"));
      // clear password field on error
      setPassword("");
      sessionUser.set({});
    } else {
      throw new Error(response.status);
    }
  };

  useEffect(() => {
    const user = sessionUser.get();
    if (user) {
      checkToken(user);
    }
  }, []);

  let className = "login";
  if (state.loading) {
    className += " loading";
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <img src={logoLogin} alt="Aloha!" />
        {state.error && <div className="error">{state.error}</div>}
        <label htmlFor="user">
          <input
            className="input is-large"
            type="text"
            id="userName"
            autoComplete="username"
            placeholder="User"
            onChange={e => setUserName(e.target.value)}
            value={userName}
          />
        </label>
        <label htmlFor="password">
          <input
            className="input is-large"
            type="password"
            placeholder="Password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button className="button is-large is-link" type="submit" name="Login">
          Come in
        </button>
      </form>
    </div>
  );
}

export default Login;
