import React, { useState } from "react";
import "./Login.scss";

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
    <form className="login" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="user">
        <input
          type="text"
          id="user"
          onChange={e => setUser(e.target.value)}
          value={user}
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <input type="submit" value="Login" />
    </form>
  );
}

export default Login;
