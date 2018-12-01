import React, { useState } from "react";
import "./Login.scss";
import logoLogin from "../../../assets/logos/logo-login.svg";

function Login(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    // TODO: do the real login
    props.onLogin({
      name: "God",
      rol: "Admiminstrator"
    });
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
      </form>
    </div>
  );
}

export default Login;
