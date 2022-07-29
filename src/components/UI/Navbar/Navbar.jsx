import React from 'react';
import {  Link } from "react-router-dom";



const Navbar = () => {



    return (
        <div className="navbar">
        <div className="navbar__links">
          <Link to="/about">О сайте </Link>
          <Link to="/beer/1">Перейти на сайт пивного магазина </Link>
          
        </div>
      </div>
    );
};

export default Navbar;



