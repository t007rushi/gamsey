import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {logInHandlerService} from "../services/auth/logInHandler"

const authContext = createContext();
const token = localStorage.getItem("Auth_token");
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isUserLoggedIn: token ? true : false,
    tokenVal: token,
  });

  const navigator = useNavigate();

  const logInHandler = async ({ email, password }) => {
    const { data, status } = await logInHandlerService(email, password);
    if (status === 200) {
      localStorage.setItem("Auth_token", JSON.stringify(data.encodedToken));
      setUser({
        tokenVal: JSON.stringify(data.encodedToken),
        isUserLoggedIn: true,
      });
      navigator("/");
    }
  };

  return (
    <authContext.Provider value={{ user, setUser, logInHandler }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error("useContext must be used inside AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
