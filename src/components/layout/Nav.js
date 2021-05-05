import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavB from "react-bootstrap/Nav";
import logo from '../../images/logo1.png';
import { AuthContext } from "../../context/AuthContext";
import Logout from "../auth/Logout";

function Nav() {
    const { user } = useContext(AuthContext);
    return (
     
             <Navbar expand='lg' >
                <NavLink to="/" exact>
                    <Navbar.Brand> <img src={logo} alt="Logo" /></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <NavB className='ml-auto justify-content-end'>
                        {user ? (
                        <>
                            <NavLink to="/admin">Admin</NavLink>
                            <Logout />
                        </>
                        ) : (
                            <NavLink to="/register">Login</NavLink>
                        )}
                    </NavB>
                </Navbar.Collapse>
             </Navbar>
     
    );
}

export default Nav;

