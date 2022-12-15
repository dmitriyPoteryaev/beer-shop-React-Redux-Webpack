import React from "react";
import classes from "./Btn_SendOrder.module.css";
import { useSelector, useDispatch } from "react-redux";

const Btn_SendOrder = ({
  children,
  FullInfo,
  createNewOrder,
  TimeAttention,
}) => {
  const dispatch = useDispatch();
  const orderPositions = useSelector(
    (state) => state.order.OrderPosition.length
  );
  const CurOrderPos = useSelector((state) => state.order.OrderPosition);
  const visMod = useSelector((state) => state.visMod.visModal);

  function HideMod(hide) {
    dispatch({ type: "HIDE_MOD", payload: hide });
  }

  return (
    <button
      className={classes.bottomforBackorSendOrderBlack}
      onClick={(event) => {
       
        orderPositions !== 0 && visMod
          ? !FullInfo.Adress.trim() ||
            !FullInfo.Phone.trim() ||
            !FullInfo.Name.trim() 
            
            ? ( TimeAttention()) 
            :createNewOrder(CurOrderPos)
          : HideMod(false)
                }}
      onMouseOver={(event) => {
        orderPositions !== 0 && visMod
          ? (event.currentTarget.className =
              classes.bottomforBackorSendOrderGrey)
          : (event.currentTarget.className =
              classes.bottomforBackorSendOrderBlack)      }}
      onMouseOut={(event) => {
        event.currentTarget.className === classes.bottomforBackorSendOrderGrey
          ? (event.currentTarget.className =
              classes.bottomforBackorSendOrderBlack)
          : (event.currentTarget.className =
              classes.bottomforBackorSendOrderBlack)
      }}
    >
      {children}
    </button>
  );
};

export default Btn_SendOrder;
