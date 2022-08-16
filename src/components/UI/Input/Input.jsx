import React from "react";
import classes from "./Input.module.css";

const Input = ({ currentType, currentPlaceholder, currentInfo }) => {



  return (
    <input
      type={currentType}
      placeholder={currentPlaceholder}
      value={currentInfo}
      className={classes.InfoAboutClient}
 
    ></input>
  );
};

export default Input;
