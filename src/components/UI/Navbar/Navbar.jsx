import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link className="navbar__links_about" to="/about">
          О сайте{" "}
        </Link>
        <Link className="navbar__links_beer" to="/beer/1">
          Перейти на сайт пивного магазина{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;