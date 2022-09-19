import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/cristina-gottardi-CSpjU6hYo_0-unsplash 2.png";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand bg-dark">
                <div className="container">
                    <ul className="nav">
                        {/* <img src={logo} style={{ height: "40px" }} alt="" /> */}
                        <li>
                            <Link to="/" className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/user" className="nav-link">
                                User List
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
