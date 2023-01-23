import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  authorization: null,
  login: () => {},
  logout: () => {},
  errorMessage: null,
});

//function login
function AuthContextProvider({ children }) {
  const [authorization, setAuthorization] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  function login(e, user) {
    e.preventDefault();
    //Aqui se haria el fetch -----
    //hacemos un fake ahora

    if (user.email === "pepe@gmail.com" && user.password === "12345") {
      setAuthorization("tokenblablblabla");
    } else {
      //la respuesta de la API cuando falle el login
      setErrorMessage("Error al introducir el email o el password");
    }
  }

  //logout

  function logout() {
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

export default function useAuthContext() {
  return useContext(AuthContext);
}
