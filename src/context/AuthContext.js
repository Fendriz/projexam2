import React, { createContext, useState } from "react";
import { BASE_URL, headers } from "../constants/api";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // const users = Object.entries(localStorage);

  const [users, setUsers] = useState(Object.entries(localStorage));
  const [islogged, setlogged] = useState(false);
  const [hotels, setHotels] = useState([]);
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
  function getHotel() {
   
    const url = BASE_URL + "establishments";
    const options = { headers };
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        // handle error
        if (json.error) {
          setHotels([]);
        } else {
          setHotels(json);
         
        }
      })
      // .then(setHotel(hotels[0]))
      .catch((error) => console.log(error));
   
    return hotels
  }

  return (
    <AuthContext.Provider
      value={{ users, islogged, hotels, registerUser, logout, login, removeUser, getHotel }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
