import React from "react";
import classes from "./ModalForOrder.module.css";
import { useSelector, useDispatch } from "react-redux";

const ModalForOrder = ({ children, setGoodBye }) => {
  const StyleModal = [classes.modalForOrder];

  const visMod = useSelector((state) => state.visMod.visModal);
  const dispatch = useDispatch();

  function HideMod(hide) {
    dispatch({ type: "HIDE_MOD", payload: hide });
  }

  if (visMod) {
    StyleModal.push(classes.active);
  }

  return (
    <div
      className={StyleModal.join(" ")}
      onClick={() => {
        HideMod(false);
        setGoodBye(true);
      }}
    >
      <div
        className={classes.contentOfModal}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalForOrder;
