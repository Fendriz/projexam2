import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import NavAdmin from "./NavAdmin"
import NavNormal from "./NavNormal"

function Nav() {
  const { islogged } = useContext(AuthContext);
  return (
      <>
      {islogged ? (<NavAdmin/>) : (<NavNormal/>)}
      </>
  );
}

export default Nav;
