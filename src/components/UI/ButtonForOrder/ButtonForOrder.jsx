import React from "react";
import BigPitureButtonForOrder from "../../../assets/BigPitureButtonForOrder.png";
import classes from './ButtonForOrder.module.css';
import { useSelector, useDispatch } from "react-redux";




const ButtonForOrder = () => {

    const dispatch = useDispatch();

    const qualityOrder =  useSelector(state=>state.order.OrderPosition.length)

    function ShowMod(show){
        dispatch({type:'SHOW_MOD',payload:show})

    }

    return (
        <div className={classes.ButtonForOrder} >
            <img 
            className={classes.imgButtonForOrder}
            src={BigPitureButtonForOrder} 
            alt={'PitureButtonForOrder'}
            onClick={()=>ShowMod(true)}
            />
            <div className={classes.cicle} >
            <div className={classes.qualityOfOrder}>{qualityOrder}</div>
            </div>
            </div>
    );
};

export default ButtonForOrder;