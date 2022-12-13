import  React  from "react";
import classes from "./ModalForOrder.module.css";
import cross from "../../assets/cross.png";
import BlockForOrder from "../UI/BlockForOrder/BlockForOrder";
import Form from "../Form/Form";

import { useSelector, useDispatch } from "react-redux";

const ModalForOrder = () => {

  const visModal = useSelector((state) => state.visMod.visModal);
  const orderPosition = useSelector((state) => state.order.OrderPosition);
  const dispatch = useDispatch();
  const StyleModal = [classes.modalForOrder];

  console.log("visModal", visModal);
  console.log("orderPosition", orderPosition);

  if (visModal) {
    StyleModal.push(classes.active);
  }

  return (
    <div
    className={StyleModal.join(" ")}
    open
    onClick={() =>  dispatch({type:'HIDE_MOD',payload:false})} >
    <div
      className={classes.contentOfModal}
      onClick={(event) => event.stopPropagation()}
    >
       {orderPosition !== 0 ? (
          <div className={classes.OrderPosition}>
            <div className={classes.HeaderModal}>
              <h1 className={classes.TitleBasket}>Корзина</h1>
              <img
                src={cross}
                className={classes.cross}
                onClick={() => dispatch({type:'HIDE_MOD',payload:false})}
              />
            </div>
            <div className={classes.ProductBasket}>Товары в корзине</div> 
              <BlockForOrder/>
            <p className={classes.SetOrder}>Оформить заказ</p>
            <Form />
          </div>
        ) : (
          <div className={classes.NothingOrder}>
            <div className={classes.HeaderModal}>
              <h1 className={classes.TitleBasket}>Корзина</h1>
              <img
                src={cross}
                className={classes.cross}
                onClick={() => dispatch({type:'HIDE_MOD',payload:false})}
              />
            </div>
            <div className={classes.BasketAttention}>
              Пока что вы ничего не добавли в корзину
            </div>
          </div>
        )
      } 
  
    </div>
  </div>
  );
};

export default ModalForOrder;
