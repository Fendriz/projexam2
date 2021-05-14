import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavB from "react-bootstrap/Nav";
import Logo from "../../images/logo1.png";

import Button from "react-bootstrap/Button";

function Nav() {
  return (
  
      <Navbar expand="lg" fixed="top" className="navNormal">
        <NavLink to="/" exact>
          <Navbar.Brand>
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <NavB className="ml-auto justify-content-end">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/contact" activeClassName ="activeLinkNormal">Contact</NavLink>
            <NavLink to="/login" activeClassName ="activeLinkNormal">
                <Button className="button" >Login</Button>
            </NavLink>
          </NavB>
        </Navbar.Collapse>
      </Navbar>
  
  );
}

export default Nav;
