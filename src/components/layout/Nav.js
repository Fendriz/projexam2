import React, { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

import NavAdmin from "./NavAdmin"
import NavNormal from "./NavNormal"


function Nav() {
  const { islogged } = useContext(AuthContext);
  console.log(islogged);
  return (
    // <div className="Navigation" style={islogged?{backgroundColor:"#00367A"}:{color:"white"}} >
    // <div className="container_hotel" >
      <>
      {islogged ? (<NavAdmin/>) : (<NavNormal/>)}
      </>
 
    /* </div>
    </div> */
  );
}

export default Nav;
