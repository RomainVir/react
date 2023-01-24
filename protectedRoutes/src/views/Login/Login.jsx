import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  function handleInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <>
      <h1>Login</h1>
      <form className="d-flex justify-content-center flex column m-5">
        <input
          type="email"
          value={user.email}
          onChange={handleInput}
          placeholder="Insert your email"
          name="email"
          className="form-control mb-3"
        />
        <input
          type="password"
          value={user.password}
          onChange={handleInput}
          placeholder="Insert your password"
          name="email"
          className="form-control mb-3"
        />
        <button className="btn btn-dark" type="submit"></button>
      </form>
    </>
  );
}
