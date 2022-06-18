import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  logInHandlerService,
  signUpHandlerService,
  signOutHandlerService,
} from "../services";
import { toast } from "react-toastify";

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
      toast.success("Signed In Succesfully");
      localStorage.setItem("Auth_token", JSON.stringify(data.encodedToken));
      setUser({
        tokenVal: JSON.stringify(data.encodedToken),
        isUserLoggedIn: true,
      });
      navigator("/");
    }
  };

  //signup
  const signUpHandler = async ({ first, last, email, password }) => {
    const data = await signUpHandlerService(first, last, email, password);
    toast.success("Signed Up Succesfully");
    localStorage.setItem("Auth_token", data.encodedToken);
    navigator("/");
  };

  //signout
  const signOutHandler = async () => {
    signOutHandlerService();
    toast.success("Signed out Succesfully");
    setUser({ isUserLoggedIn: false });
    navigator("/");
  };

  return (
    <authContext.Provider
      value={{ user, setUser, logInHandler, signUpHandler, signOutHandler }}
    >
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
