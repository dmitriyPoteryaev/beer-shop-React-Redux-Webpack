import {React, useState} from "react";
import classes from "./ModalForOrder.module.css";
import GoodBye from "../UI/GoodBye/GoodBye";
import cross from "../../assets/cross.png";
import BlockForOrder from "../UI/BlockForOrder/BlockForOrder";
import Form from "../Form/Form";

const ModalForOrder = ({
}) => {
  const StyleModal = [classes.modalForOrder];
  const [goodBye, setGoodBye] = useState(true);

  if (visibMod) {
    StyleModal.push(classes.active);
  }

  const removeOrderPosition = (orderPosition) => {
    setPosOrder(
      PosOrder.filter((position) => position.id !== orderPosition.id)
    );
  };

  return (
    <div
      className={StyleModal.join(" ")}
      onClick={() => {
        setVisibMod(false);
        setGoodBye(true);
      }}
    >
      <div
        className={classes.contentOfModal}
        onClick={(event) => event.stopPropagation()}
      >
        {goodBye ? (
          QualPosOrder !== 0 ? (
            <div className={classes.OrderPosition}>
              <div className={classes.HeaderModal}>
                <h1 className={classes.TitleBasket}>Корзина</h1>
                <img
                  src={cross}
                  className={classes.cross}
                  onClick={() => setVisibMod(false)}
                />
              </div>
              <div className={classes.ProductBasket}>Товары в корзине</div>
              {PosOrder.map((contentForOrder) => (
                <BlockForOrder
                  value={contentForOrder}
                  key={contentForOrder.id}
                  remove={removeOrderPosition}
                />
              ))}
              <p className={classes.SetOrder}>Оформить заказ</p>
              <Form  />
            </div>
          ) : (
            <div className={classes.NothingOrder}>
              <div className={classes.HeaderModal}>
                <h1 className={classes.TitleBasket}>Корзина</h1>
                <img
                  src={cross}
                  className={classes.cross}
                  onClick={() => setVisibMod(false)}
                />
              </div>
              <div className={classes.BasketAttention}>
                Пока что вы ничего не добавли в корзину
              </div>
            </div>
          )
        ) : (
          <GoodBye />
        )}
      </div>
    </div>
  );
};

export default ModalForOrder;