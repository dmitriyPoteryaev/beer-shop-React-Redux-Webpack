import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import visa from "../../assets/pay/visa.svg";
import mastercard from "../../assets/pay/mastercard.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <nav className="Footer_links">
        <Link className="li" to="/">
          Coronavirus restrictions
        </Link>
        <Link to="/" className="li">
          Location our bars
        </Link>
      </nav>
      <div className="way_pay">
        <img src={visa} />
        <img src={mastercard} />
      </div>
    </footer>
  );
};

export default Footer;
