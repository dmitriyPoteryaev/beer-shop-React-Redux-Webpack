import React from "react";
import classes from "./ModalForOrder.module.css";
import { useSelector,useDispatch } from "react-redux";

const ModalForOrder = ({
  children,
  visiable,
  setGoodBye
}) => {
  const StyleModal = [classes.modalForOrder];

  const dispatch = useDispatch();
  function HideMod(hide){
    dispatch({type:'HIDE_MOD',payload:hide})

}


  const visMod = useSelector((state) => state.visMod.visModal);

// visiable - должен везде удалиться
  if (visMod||visiable) {
    StyleModal.push(classes.active);
  }

  return (
    <div className={StyleModal.join(" ")}
     onClick={() => {HideMod(false);setGoodBye(true)}}>
      
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
