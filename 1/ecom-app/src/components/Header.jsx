import React from "react";
import { MDBNavbar, MDBRow } from 'mdb-react-ui-kit'
function Header() {
    return (
        <>
            <MDBNavbar className="bg-dark nav navbar navbar-expand-md navv">
                <a href="" className="navbar-brand text-white ms-5"> Ecom-App </a>
                <ul className="navbar-nav">
                    <li className="nav-item ms-2"><a href="" className="nav-link text-white"> Home </a></li>
                    <li className="nav-item ms-2"><a href="" className="nav-link text-white"> Shop Now </a></li>
                    <li className="nav-item ms-2"><a href="" className="nav-link text-white">  Blog </a></li>
                    <li className="nav-item ms-2"><a href="" className="nav-link text-white"> Contact </a></li>

                    <li className="nav-item ms-5"><a href="" className="nav-link text-white"> Login </a></li>
                    <li className="nav-item ms-2"><a href="" className="nav-link text-white"> Register </a></li>

                    <li className="nav-item ms-5"><a href="" className="text-white"><span className="bi bi-cart fs-4"><span className="badge badge-sm bg-white text-dark">0</span></span></a></li>
                </ul>
            </MDBNavbar>
        </>
    )
}

export default Header