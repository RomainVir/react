import "../Login/Login.css";

export default function LogIn() {
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
          <h1>Log in</h1>

          
          <div class="input-grp">
            <label for="Email"></label>
            <input type="email" placeholder="Email" id="email" />

            <div class="input-grp">
              <label for="Password"></label>
              <div class="input-grp">
                <input type="password" id="password" placeholder="Password" />
              </div>
            </div>
          </div>

          <div class="enter">
          <button className="enter" type="button">
                Enter
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
