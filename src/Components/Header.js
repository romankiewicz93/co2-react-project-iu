import React from "react";
import "./Header.css";
import Logo from '../assets/images/co2.png';
import { NavLink } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <section id="navbar-section">
                <nav className="navbar navbar-expand-lg navbar-dark custom-navbar py-2">
                    <div className="container">
                        <NavLink to='/' className="navbar-brand d-flex align-items-center">
                            <img
                                src={Logo}
                                alt="logo"
                                className="img-fluid"
                            />
                            <span className="ms-2">CO2Footprint</span>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link active" aria-current="page">
                                        Startseite
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/unternehmen' className="nav-link">Unternehmen</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/laender' className="nav-link">Länder</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/daten' className="nav-link">CO2-Daten</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/kontakt' className="nav-link">Kontakt</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Header;
