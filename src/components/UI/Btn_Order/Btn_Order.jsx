import React from "react";
import BigPitureButtonForOrder from "../../../assets/order/basket";
import classes from "./Btn_Order.module.css";
import { useSelector, useDispatch } from "react-redux";

const Btn_Order = () => {
  const dispatch = useDispatch();

  const qualityOrder = useSelector((state) => state.order.OrderPosition.length);

  function ShowMod(show) {
    dispatch({ type: "SHOW_MOD", payload: show });
  }

  return (
    <div className={classes.ButtonForOrder}>
      <img
        className={classes.imgButtonForOrder}
        src={BigPitureButtonForOrder}
        alt={"BtnOrder"}
        onClick={() => ShowMod(true)}
      />
      <div className={classes.cicle}>
        <div className={classes.qualityOfOrder}>{qualityOrder}</div>
      </div>
    </div>
  );
};

export default Btn_Order;
