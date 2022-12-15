import React from "react";
import classes from "./Block_order.module.css";
import trash from "../../../assets/trash.png";
import blacktrash from "../../../assets/blacktrash.png";
import { useDispatch, useSelector } from "react-redux";

const Block_order = () => {
  const dispatch = useDispatch();
  const orderPosition = useSelector((state) => state.order.OrderPosition);

  function DeleteOrder(id) {
    dispatch({ type: "DELETE_ORDER", payload: id });
  }

  return orderPosition.map((Position) => (
    <div key={Position.id} className={classes.blockForContent}>
      <p className={classes.TitleOfThing}> {Position.name}</p>
      <img
        src={Position.image_url}
        className={classes.content_picture}
        alt={"SomethingContent"}
      />
      <p className={classes.abv}>{Position.abv} %</p>
      <img
        src={trash}
        className={classes.img_trash}
        alt={"ForTrash"}
        onClick={() => DeleteOrder(Position.id)}
        onMouseOver={(event) => (event.currentTarget.src = blacktrash)}
        onMouseOut={(event) => (event.currentTarget.src = trash)}
      />
    </div>
  ));
};

export default Block_order;
