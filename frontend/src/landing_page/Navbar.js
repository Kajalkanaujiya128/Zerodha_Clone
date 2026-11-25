
import React from "react";
import { Link } from "react-router-dom";

function Navbar({ hideOptions }) {
    return (
        <nav className="navbar navbar-expand-lg border-bottom main-navbar">
            <div className="container navbar-container">

                <Link className="navbar-brand" to="/">
                    <img
                        src="media/images/logo.svg"
                        className="navbar-logo"
                        alt="Logo"
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    {!hideOptions && (
                        <ul className="navbar-nav ms-auto navbar-links">
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">
                                    Signup
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/product">
                                    Product
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">
                                    Pricing
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/support">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    )}

                    {hideOptions && (
                        <div className="navbar-user-icon">
                            <i className="fa-solid fa-circle-user"></i>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
