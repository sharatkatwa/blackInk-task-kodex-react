import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [AllUsers, setAllUsers] = useState(JSON.parse(localStorage.getItem("AllUsers")) || []);
  const [LoggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("LoginUser")) || null);

  const registerUser = (user) => {
    const users = [...AllUsers, user];
    setAllUsers(users);
    localStorage.setItem("AllUsers", JSON.stringify(users));
    toast.success("Account created")
    // auto login
    setLoggedInUser(user);
    localStorage.setItem("LoginUser", JSON.stringify(user));
  };
  
  
  const login = (user) => {
      let getUser = AllUsers.find((elem) => (elem.email === user.email && elem.password === user.password));
      console.log(getUser)
    if (getUser) {
      setLoggedInUser(getUser);
      localStorage.setItem("LoginUser", JSON.stringify(getUser));
      toast.success("Login success")
      return;
    }
    console.log("User Not Found");
    toast.error("Incorrect email or password")
    return;
  };

  const logoutFun = () => {
    localStorage.removeItem("LoginUser");
    setLoggedInUser(null);
  };

  return (
    <Auth.Provider value={{ AllUsers, setAllUsers, LoggedInUser, setLoggedInUser, logoutFun, login, registerUser }}>
      {children}
    </Auth.Provider>
  );
};

export const UseAuth = () => useContext(Auth);
