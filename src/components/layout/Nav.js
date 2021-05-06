import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavB from "react-bootstrap/Nav";
import Logo from "../../images/logo1.png";
import Logoinv from "../../images/logoinv.png";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../auth/Logout";
import Button from "react-bootstrap/Button";

function Nav() {
  const { islogged } = useContext(AuthContext);
  console.log(islogged);
  return (
    <div className="Navigation" style={islogged?{backgroundColor:"#00367A"}:{color:"white"}} >
    <div className="container_hotel" >
      <Navbar expand="lg">
        <NavLink to="/" exact>
          <Navbar.Brand>
            <img src={islogged?Logoinv:Logo} alt="Logo" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={islogged?{backgroundColor:"#EE4B4D"}:{color:"#EEB84B"}}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <NavB className="ml-auto justify-content-end">
            <NavLink to="/" style={islogged?{color:"white"}:{color:"#00367A"}} >Home</NavLink>
            <NavLink to="/contact" style={islogged?{color:"white"}:{color:"#00367A"}}>Contact</NavLink>
            {islogged ? (
              <>
              <NavLink to="/admin"></NavLink>
              <Logout />
              </>
            ) : (
              <NavLink to="/login">
                <Button class="button" >Login</Button>
              </NavLink>
            )}
            {/* <div className="Button">
                                    <p>Login</p>
                                </div> */}
           
          </NavB>
        </Navbar.Collapse>
      </Navbar>
    </div>
    </div>
  );
}

export default Nav;
