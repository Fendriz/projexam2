import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavB from "react-bootstrap/Nav";
import Logoinv from "../../images/logoinv.png";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../auth/Logout";


function Nav() {
  const { islogged } = useContext(AuthContext);
  console.log(islogged);
  return (
  
      <Navbar expand="lg" fixed="top" className="navAdmin">
        <NavLink to="/" exact>
          <Navbar.Brand>
            <img src={Logoinv} alt="Logo" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <NavB className="ml-auto justify-content-end">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/contact" activeClassName ="activeLinkAdmin">Contact</NavLink>
            <NavLink to="/admin" activeClassName ="activeLinkAdmin">Admin</NavLink>
           
            <Logout />
          </NavB>
        </Navbar.Collapse>
      </Navbar>
   
  );
}

export default Nav;