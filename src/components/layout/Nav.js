import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavB from "react-bootstrap/Nav";
import logo from '../../images/logo1.png';
import { AuthContext } from "../../context/AuthContext";
import Logout from "../auth/Logout";
import Button from "react-bootstrap/Button";

function Nav() {
    const { user } = useContext(AuthContext);

  
    return (
        <div className="container_hotel">
            <Navbar expand='lg' >
                <NavLink to="/" exact>
                    <Navbar.Brand> <img src={logo} alt="Logo" /></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <NavB className='ml-auto justify-content-end'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                      
                            <NavLink to="/login">
                                {/* <div className="Button">
                                    <p>Login</p>
                                </div> */}
                                <Button class="button">Login</Button>
                            </NavLink>
                     
                        
                        
                    </NavB>
                </Navbar.Collapse>
             </Navbar>
        </div>
             
     
    );
}

export default Nav;

