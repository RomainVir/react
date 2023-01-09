import "../Login/Login.css";
import { useState } from "react";

export default function LogIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  console.log(user);
  function handleUser(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  // para simular backend
  function handleSubmit(e, user) {
    e.preventDefault();
    if (user.email === "pepe@mail.com" && user.password === "1234") {
      alert("Conected");
    } else {
      alert("Incorrect!!!");
    }
  }
  //

  return (
    <div className="containerconnexion">
      <div className="container2">
        <div className="register">
          <h1>Register</h1>

          <div className="input-grp">
            <label for="Email"></label>
            <input type="text" placeholder="Name" id="Name" />
            <div className="input-grp">
              <label for="Email"></label>
              <input type="text" placeholder="Surname" id="Surname" />

              <div className="input-grp">
                <label for="Email"></label>
                <input type="email" placeholder="Email" id="Email" />
              </div>

              <div className="input-grp">
                <label for="Password"></label>
              </div>

              <div className="input-grp">
                <input type="password" placeholder="Password" id="Password" />
              </div>
              <button className="enter " type="button">
                Register
              </button>
            </div>
          </div>
        </div>
        <div class="login">
          <form onSubmit={(e) => handleSubmit(e, user)}>
            <h1>Log in</h1>

            <div class="input-grp">
              <label for="Email"></label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleUser}
              />

              <div class="input-grp">
                <label for="Password"></label>
                <div class="input-grp">
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleUser}
                  />
                </div>
              </div>
            </div>

            <div class="enter">
              <button className="enter" type="submit">
                Enter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
