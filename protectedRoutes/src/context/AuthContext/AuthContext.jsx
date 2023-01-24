import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  auth: {
    jwt: null,
    role: null,
  },
  login: () => {},
  logout: () => {},
  errorMessage: null,
});

// {"jwt": jhfohrforhfro, 'role': "2"} asi se guarda en el local storage
// mais nous on en a besoin comme ça : {jwt:jriuvgriv, role: 2 -----

const MY_AUTH_APP = "MY_AUTH_APP";

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(
    JSON.parse(window.localStorage.getItem(MY_AUTH_APP)) ?? {
      jwt: null,
      role: null,
    }
  );
  const [errorMessage, setErrorMessage] = useState(null);

  function login(e) {
    e.preventDefault();
    //aqui se haría el fetch -------

    if (user.email === "pepe@gmail.com" && user.password === "12345") {
      setAuthorization("tokenblablblabla");
      window.localStorage.setItem(MY_AUTH_APP, "tokenblablblabla");
      setErrorMessage(null);
    } else {
      //la respuesta de la API cuando falle el login
      setErrorMessage("Error al introducir el email o el password");
    }
  }
  function logout() {
    window.localStorage.removeItem(MY_AUTH_APP);
    setAuthorization({
      jwt: null,
      role: null,
    });
  }

  const value = {
    auth,
    login,
    logout,
    errorMessage,
  };

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
