import React from "react";
import classes from "./Modal_order.module.css";
import cross from "../../assets/cross.png";
import Block_order from "../UI/Block_order/Block_order";
import Form from "../Form/Form";
import { useSelector, useDispatch } from "react-redux";

const Modal_order = () => {
  const dispatch = useDispatch();

  const visModal = useSelector((state) => state.visMod.visModal);
  const orderPosition = useSelector((state) => state.order.OrderPosition);

  const StyleModal = [classes.Modal_order];

  if (visModal) {
    StyleModal.push(classes.active);
  }

  return (
    <aside
      className={StyleModal.join(" ")}
      onClick={() => dispatch({ type: "HIDE_MOD", payload: false })}
    >
      <div
        className={classes.block_content}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={classes.headerMod}>
          <h1 className={classes.headerMod_title}>Корзина</h1>
          <img
            src={cross}
            className={classes.headerMod_cross}
            onClick={() => dispatch({ type: "HIDE_MOD", payload: false })}
          />
        </header>
        {orderPosition.length !== 0 ? (
          <article className={classes.block_order}>
            <Block_order />
            <p className={classes.block_order__setOrder}>Оформить заказ</p>
            <Form />
          </article>
        ) : (
          <p className={classes.block_attention}>
            Вы ничего не добавили в корзину
          </p>
        )}
      </div>
    </aside>
  );
};

export default Modal_order;
