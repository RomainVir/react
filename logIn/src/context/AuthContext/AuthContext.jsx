import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  authorization: null,
  login: () => {},
  logout: () => {},
  errorMessage: null,
});

export default AuthContext;

const MY_AUTH_APP = "MY_AUTH_APP";

//function login
export function AuthContextProvider({ children }) {
  const [authorization, setAuthorization] = useState(
    window.localStorage.getItem(MY_AUTH_APP) ?? null
  );

  const [errorMessage, setErrorMessage] = useState(null);

  function login(e, user) {
    console.log(user);
    e.preventDefault();
    //Aqui se haria el fetch -----
    //hacemos un fake ahora

    if (user.email === "pepe@gmail.com" && user.password === "12345") {
      setAuthorization("tokenblablblabla");
      window.localStorage.setItem(MY_AUTH_APP, "tokenblablblabla");
      setErrorMessage(null);
    } else {
      //la respuesta de la API cuando falle el login
      setErrorMessage("Error al introducir el email o el password");
    }
  }

  //logout

  function logout() {
    window.localStorage.removeItem(MY_AUTH_APP);
    setAuthorization(null);
  }
  console.log(authorization);

  const value = {
    authorization,
    errorMessage,
    login,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
