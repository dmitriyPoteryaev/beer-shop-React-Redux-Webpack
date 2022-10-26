import React from "react";
import "./Navbar.css";
import logo from "../../../assets/brewdog-logo-vector.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <img className="Image_nav" src={logo} />
      <nav className="navbar__links">
        <Link className="pos_navbar" to="/opportunities">
          Opportunities
        </Link>
        <Link className="pos_navbar" to="/about">
          About us
        </Link>
        <Link className="pos_navbar" to="/beer/1">
          Shop
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
