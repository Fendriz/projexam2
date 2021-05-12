import React, { createContext, useState } from "react";
import { BASE_URL, headers } from "../constants/api";

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
  async function getHotel({ id }) {
   
    const hotelName="";
    const url = BASE_URL + "establishments";
    const options = { headers };
    const response = await fetch(url, options)
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    if (response.ok) {
      const json = await response.json();
      json.map(hotel => {
        if (hotel.id === id){
          hotelName = hotel.name
        }
      })
    }
    return hotelName
  }

  return (
    <AuthContext.Provider
      value={{ users, islogged, registerUser, logout, login, removeUser, getHotel }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
