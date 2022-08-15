import React from 'react';
import {  Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchBeer } from "../../../Redux/Async/AcynsQuery";
const Navbar = () => {

  const dispatch= useDispatch()


    return (
        <div className="navbar">
        <div className="navbar__links">
          <Link className="navbar__links_about" to="/about">О сайте </Link>
          <Link 
          onClick={()=>dispatch(fetchBeer())}
          className="navbar__links_beer"
           to="/beer/1">Перейти на сайт пивного магазина </Link>
          
        </div>
      </div>
    );
};

export default Navbar;



