import React, { createContext, useState } from "react";
import { BASE_URL, headers } from "../constants/api";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // const users = Object.entries(localStorage);
  let localLogged=false;
  if(localStorage.getItem("islogged")==="true" ){
    localLogged=true;
  }
  if(localStorage.getItem("islogged")==="false"){
    localLogged=false;
  }
  const [users, setUsers] = useState(Object.entries(localStorage));
  const [islogged, setlogged] = useState(localLogged);//CHANGE TRUE/FALSE TO TOGGLE FOR TEST
  const [hotels, setHotels] = useState([]);
  const [ismodal, setShow]=useState(false);

 
  function registerUser({ username, password }) {
    localStorage.setItem(username, password);
    setUsers(Object.entries(localStorage));
  }

  function login({ username, password }) {
    let login=false; 
    if (users.length !== 0) {
      users.forEach((user) => {
        if (user[0] === username && user[1] === password) {
          localStorage.setItem("islogged", true)
          setlogged(true);
          login= true;
        }
      });
    }
    if (login) {return true}
    else return false;
  }

  function logout() {
    localStorage.setItem("islogged",false)
    setlogged(false);
    // setUsers(null);
  }
  function removeUser(username){
    localStorage.removeItem(username);
  }
  function getHotel() {
    const url = BASE_URL + "establishments";
    const options = { headers };
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          setHotels([]);
        } else {
          setHotels(json);
        }
      })
      .catch((error) => console.log(error));
      
    return hotels
  }
  function openModal(){
   setShow(true);
  }
  function closeModal(){
    setShow(false);
  }
  return (
    <AuthContext.Provider
      value={{ users, islogged, hotels, registerUser, logout, login, removeUser, getHotel,openModal,closeModal,ismodal }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
