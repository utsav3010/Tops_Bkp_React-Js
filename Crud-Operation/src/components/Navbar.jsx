import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="nav navbar navbar-expand-md bg-dark text-white p-3">
                <Link to='' className="navbar-brand text-white">
                    CRUD App
                </Link>
                <button
                    className="btn btn-md bg-light navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#togg"
                >
                    <span className="bi bi-grid" />
                </button>
                <div className="collapse navbar-collapse" id="togg">
                    <ul className="navbar-link">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to=''>About</Link>
                        </li>
                        <li className="dropdown">
                            <Link to='' className="dropdown-toggle" data-bs-toggle="dropdown">
                                Products
                            </Link>
                            <ul
                                className="dropdown-menu bg-dark"
                                style={{ minWidth: "220px !important" }}
                            >
                                <li>
                                    <Link to=''>Mens Products</Link>
                                </li>
                                <li>
                                    <Link to=''>Womens Products</Link>
                                </li>
                                <li>
                                    <Link to=''>Kids Products</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to=''>Services</Link>
                        </li>
                        <li>
                            <Link to='/contact-us'>Contact</Link>
                        </li>
                        <li>
                            <Link to=''>
                                Cart{" "}
                                <span className="bi bi-cart-dash">
                                    <span className="badge badge-danger bg-danger ms-1">0</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}
export default Navbar