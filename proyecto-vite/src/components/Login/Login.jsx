import "../Login/Login.css";
import logo from "../../assets/google.png"
export default function LogIn() {
  return (
    <div className="containerconnexion">
      <div className="container2">
        <div className="register">
          <h1>Register</h1>

          <button className="google " type="button">
            <img src={logo} width="40px" alt="ggle" />
          </button>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
