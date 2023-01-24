import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/AuthContext";

export default function Login() {
  const { login, errorMessage } = useAuthContext();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(e) => login(e, user)}>
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
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </>
  );
}
