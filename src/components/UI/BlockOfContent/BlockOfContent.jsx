import React from "react";
import classes from "./BlockOfContent.module.css";
import PitureButtonForOrder from "../../../assets/PitureButtonForOrder.png";
import blackButtonForOrder from "../../../assets/blackButtonForOrder.png";
import CheckDesc from "../../../utilits/CheckDesc.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAsyncBeer } from "../../../Redux/reducers/BeerReducer";
import { useParams } from "react-router-dom";

const BlockOfContent = ({ value }) => {
  const router = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();

  function addOrder(order) {
    dispatch({ type: "ADD_ORDER", payload: order });
  }

  const { name, id, image_url, abv, description } = value;

  return (
    <div
      className={classes.blockForContent}
      onClick={() => router(`/beer/${params.currentPage}/${name}`)}
    >
      <p className={classes.TitleOfBeer}> {name}</p>
      <img
        src={image_url}
        className={classes.content_picture}
        alt={"SomethingBeer"}
      />
      <img
        src={PitureButtonForOrder}
        className={classes.ForOrder}
        alt={"ButtonForOrder"}
        onClick={(event) => {
          addOrder({
            id: Date.now(),
            image_url,
            abv,
            key: Date.now(),
          }),
            event.stopPropagation();
        }}
        onMouseOver={(event) => (event.currentTarget.src = blackButtonForOrder)}
        onMouseOut={(event) => (event.currentTarget.src = PitureButtonForOrder)}
      />
      <p className={classes.abv}>{abv} %</p>
      <p className={classes.TitleDescription}>Description</p>
      <p className={classes.description}>{CheckDesc(description, 140)}</p>
    </div>
  );
};

export default BlockOfContent;
