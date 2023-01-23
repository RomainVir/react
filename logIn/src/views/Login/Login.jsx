import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleInput() {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={() => login(e, user)}>
        <input
          type="email"
          value={user.email}
          onChange={handleInput}
          placeholder="Insert your email"
          name="email"
        />
        <input
          type="password"
          value={user.password}
          onChange={handleInput}
          placeholder="Insert your password"
          name="password"
        />
        <button type="submit"> Enter</button>
      </form>
    </>
  );
}
