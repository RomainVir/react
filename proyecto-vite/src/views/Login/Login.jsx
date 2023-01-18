import "../Login/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//pour remettre les inputs a zero quand on s´enregistre
const initialUserState = {
  email: "",
  password: "",
  name: "",
  surname: "",
};

export default function Connexion() {
  // REGISTER +***************************
  const [newUser, setNewUser] = useState(initialUserState);

  function handleInputRegister(e) {
    const newRegister = {
      ...newUser,
      [e.target.name]: e.target.value,
    };
    setNewUser(newRegister);
  }

  function registerUser(e) {
    e.preventDefault();
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then((response) => {
      if (response.status === 401) {
        throw "Not authorized";
      } else if (response.status == 200) {
        setNewUser(initialUserState);
        alert("User registered!!");
      } else if (response.status === 409) {
        alert("User already registered");
      }
    });
  }

  //LOGIN ************
  const [User, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleLogin(e) {
    const newLogin = {
      ...User,
      [e.target.name]: e.target.value,
    };
    setUser(newLogin);
  }

  async function loginUser(e) {
    e.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(User),
    }).then((response) => {
      if (response.status === 401) {
        throw "Not authorized";
      } else if (response.status == 200) {
        navigate("/");
      } else {
        alert("Wrong credentials, try again");
      }
    });
  }

  return (
    <div className="containerconnexion">
      <div className="container2">
        <form className="register" onSubmit={registerUser}>
          <h1>Register</h1>

          <div className="input-grp">
            <label for="Email"></label>
            <input
              type="text"
              required
              placeholder="Name"
              name="name"
              value={newUser.name}
              onChange={handleInputRegister}
            />
            <div className="input-grp">
              <label for="Email"></label>
              <input
                type="text"
                required
                name="surname"
                placeholder="Surname"
                value={newUser.surname}
                onChange={handleInputRegister}
              />

              <div className="input-grp">
                <label for="Email"></label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={newUser.email}
                  onChange={handleInputRegister}
                />
              </div>

              <div className="input-grp">
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  value={newUser.password}
                  onChange={handleInputRegister}
                />
              </div>
              <button className="enter" type="submit">
                Register
              </button>
            </div>
          </div>
        </form>

        <div class="login">
          <form onSubmit={loginUser}>
            <h1>Log in</h1>

            <div class="input-grp">
              <label for="Email"></label>
              <input
                type="email"
                name="email"
                required
                value={User.email}
                onChange={handleLogin}
              />

              <div class="input-grp">
                <label for="Password"></label>
                <div class="input-grp">
                  <input
                    type="password"
                    name="password"
                    required
                    value={User.password}
                    onChange={handleLogin}
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
