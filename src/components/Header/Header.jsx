import React from "react";
import LineOrder from "./LineOrder/LineOrder";
import Navbar from "./Navbar/Navbar";
import './Header.css'

const Header = ({curPage}) => {
  return (
    <header className="Header">
      <Navbar></Navbar>
      <LineOrder
      curPage={curPage}
      ></LineOrder>
    </header>
  );
};

export default Header;
