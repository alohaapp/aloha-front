import React, { useState } from "react";
import { API_URL } from "../../../constants";
import "./Login.scss";
import logoLogin from "../../../assets/logos/logo-login.svg";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

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
      setError(null);
      props.onLogin(await response.json());
      /*
    } else if (response.status === 401) {
      setError("Nop!");
      // Reset password on Error
      setPassword("");
    */
    } else {
      const json = await response.json();
      if (json && json.message === "Incorrect username or password") {
        setError(json.message);
        // Reset password on Error
        setPassword("");
      } else {
        throw new Error(response.status);
      }
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <img src={logoLogin} alt="Aloha!" />
        {error && <div className="error">{error}</div>}
        <label htmlFor="user">
          <input
            className="input is-large"
            type="text"
            id="userName"
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
