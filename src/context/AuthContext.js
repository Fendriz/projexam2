import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

   

       
    const existingUsers = Object.keys(localStorage);
         


    const [user, setUser] = useState(existingUsers);
    // console.log(existingUser);
    function registerUser(username, password) {
        localStorage.setItem(username, JSON.stringify(password));
        
        setUser({...existingUsers, username});
        console.log(existingUsers);
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    return <AuthContext.Provider value={{ user, registerUser, logout }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
