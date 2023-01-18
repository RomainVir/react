import { useState, createContext, useContext } from "react";

export default function logInChecker(){

    const UiModeContext = createContext({
        UiMode: "logged",
        toggleUiMode: () => {}
      });
} 
export function UiModeContextProvider({ children }) {
    const [UiMode, setUiMode] = useState("login")