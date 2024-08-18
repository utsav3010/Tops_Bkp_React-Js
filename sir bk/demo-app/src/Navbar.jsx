import React from "react";
import { Nav,NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navbar()
{
    return(
        <>
        <Nav className="nav navbar navbar-expand-md bg-dark p-2">
            <NavbarBrand className="ms-5 text-white">React Routing DOM</NavbarBrand>
            <ul className="navbar-link">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About</Link></li>
            <li><Link to="/our-services">Services</Link></li>
            <li><Link to="">Gallery</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
           </ul>
        </Nav>
        </>
    )
}
export default Navbar