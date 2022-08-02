import React, {  useContext } from "react";
import BigPitureButtonForOrder from "../../../assets/BigPitureButtonForOrder.png";
import classes from './ButtonForOrder.module.css';
import { useSelector } from "react-redux";




const ButtonForOrder = ({setVisiableOfModal}) => {

    const qualityOrder =  useSelector(state=>state.order.OrderPosition.length)

    return (
        <div className={classes.ButtonForOrder} >
            <img 
            className={classes.imgButtonForOrder}
            src={BigPitureButtonForOrder} 
            alt={'PitureButtonForOrder'}
            onClick={()=>setVisiableOfModal(true)}
            />
            <div className={classes.cicle} >
            <div className={classes.qualityOfOrder}>{qualityOrder}</div>
            </div>
            </div>
    );
};

export default ButtonForOrder;