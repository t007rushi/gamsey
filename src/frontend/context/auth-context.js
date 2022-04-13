import { createContext, useContext, useState } from "react";

const authContext = createContext();
const token = localStorage.getItem("Auth_token");
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isUserLoggedIn: token ? true : false,
    tokenVal: token,
  });

  return (
    <authContext.Provider value={{ user, setUser }}>
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
