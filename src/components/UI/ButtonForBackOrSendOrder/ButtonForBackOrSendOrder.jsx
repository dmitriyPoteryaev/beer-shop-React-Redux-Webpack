import React from "react";
import classes from "./ButtonForBackOrSendOrder.module.css";
import {useSelector, useDispatch  } from "react-redux";

const ButtonForBackOrSendOrder = ({
  children,
  FullInfo,
  createNewOrder,
  TimeAttention,
}) => {
  const dispatch = useDispatch();
  const orderPositions = useSelector(state=>state.order.OrderPosition.length)
  const CurOrderPos = useSelector(state=>state.order.OrderPosition)
  const visMod = useSelector(state => state.visMod.visModal);

  function HideMod(hide){
    dispatch({type:'HIDE_MOD',payload:hide})

}


  return (
    <button
      className={classes.bottomforBackorSendOrderBlack}
      onClick={() => {
        orderPositions !== 0 && visMod
          ? FullInfo.Adress === null ||
          FullInfo.Phone === null ||
          FullInfo.Name === null ||
          FullInfo.Adress === "" ||
          FullInfo.Phone === "" ||
          FullInfo.Name === ""
            ? TimeAttention()
            : createNewOrder(CurOrderPos)
            : HideMod(false);
      }}
      onMouseOver={(event) => {
        orderPositions !== 0 && visMod
          ? (event.currentTarget.className =
              classes.bottomforBackorSendOrderGrey)
          : (event.currentTarget.className =
              classes.bottomforBackorSendOrderBlack);
      }}
      onMouseOut={(event) => {
        event.currentTarget.className === classes.bottomforBackorSendOrderGrey
          ? (event.currentTarget.className =
              classes.bottomforBackorSendOrderBlack)
          : (event.currentTarget.className =
              classes.bottomforBackorSendOrderBlack);
      }}
    >
      {children}
    </button>
  );
};

export default ButtonForBackOrSendOrder;
