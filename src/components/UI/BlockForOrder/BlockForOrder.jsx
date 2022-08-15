import React from 'react';
import classes from './BlockForOrder.module.css';
import trash from '../../../assets/trash.png';
import blacktrash from '../../../assets/blacktrash.png';
import { useDispatch, useSelector } from "react-redux";

const BlockForOrder = () => {

    const dispatch = useDispatch();
    const orderPositions = useSelector(state=>state.order.OrderPosition)




    function DeleteOrder(id){
      dispatch({type:'DELETE_ORDER', payload:id})
    }



    return (
        orderPositions.map((orderPosition)=>
        <div 
        key={orderPosition.id}
        className={classes.blockForContent}>
        <p className={classes.TitleOfThing}> {orderPosition.name}</p>
        <img src={orderPosition.image_url} 
         className={classes.content_picture}
           alt={'SomethingContent'}/>
        <p className={classes.abv}>{orderPosition.abv} %</p>
        <img
         src={trash} 
          className={classes.img_trash} 
           alt={'ForTrash'}
            onClick={()=>DeleteOrder(orderPosition.id)}
            onMouseOver={(event)=>(event.currentTarget.src = blacktrash)}
            onMouseOut={(event)=>(event.currentTarget.src = trash)}/>
    </div>
        )
            
        
       
    );
};

export default BlockForOrder;