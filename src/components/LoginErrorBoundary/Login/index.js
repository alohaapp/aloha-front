import React, { useState } from "react";
import "./Login.scss";
import logoLogin from "../../../assets/logos/logo-login.svg";
import { API_URL } from "../../../constants";

function Login(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    await fetch(`${API_URL}/security/authenticate`, {
      method: "POST",
      body: JSON.stringify({ userName: user, password }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 401) {
          setErrorMessage("Incorrect username or password.");
        } else {
          setErrorMessage("There was an error. Please try again later.");
        }
      })
      .then(userData => {
        if (userData) {
          props.onLogin({ ...userData, rol: "Administrator" });
        }
      })
      .catch(error => setErrorMessage(error));
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <img src={logoLogin} alt="Aloha!" />
        <label htmlFor="user">
          <input
            className="input is-large"
            type="text"
            id="user"
            placeholder="User"
            onChange={e => setUser(e.target.value)}
            value={user}
          />
        </label>
        <label htmlFor="password">
          <input
            className="input is-large"
            type="password"
            placeholder="Password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button className="button is-large" type="submit" name="Login">
          Come in
        </button>
        <label htmlFor="error">{errorMessage}</label>
      </form>
    </div>
  );
}

export default Login;
