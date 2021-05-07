import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // const users = Object.entries(localStorage);

  const [users, setUsers] = useState(Object.entries(localStorage));
  const [islogged, setlogged] = useState(false);
  // console.log(existingUser);
  function registerUser({ username, password }) {
    localStorage.setItem(username, password);

    setUsers(Object.entries(localStorage));
    // console.log(users);
  }
  function login({ username, password }) {
    
    if (users.length !== 0) {
      users.map((user) => {
       
        if (user[0] === username && user[1] === password) {
          
          setlogged(true);
        }
      });
    }
    return false;
  }

  function logout() {
    setlogged(false);
    // setUsers(null);
    
  }

  function removeUser({username}){

    localStorage.removeItem(username);
  }

  return (
    <AuthContext.Provider
      value={{ users, islogged, registerUser, logout, login, removeUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
