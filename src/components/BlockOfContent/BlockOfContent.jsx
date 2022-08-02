import React from "react";
import classes from "./BlockOfContent.module.css";
import PitureButtonForOrder from "../../assets/PitureButtonForOrder.png";
import blackButtonForOrder from "../../assets/blackButtonForOrder.png";
import CheckDesc from "../../utilits/CheckDesc.js";
import { useNavigate } from "react-router-dom";
import { useDispatch  } from "react-redux";

const BlockOfContent = ({ value,currentPage }) => {
  const router = useNavigate();

  const dispatch = useDispatch();



  function addOrder(order){
    dispatch({type:'ADD_ORDER', payload:order})
  }

  const { name, id, image_url, abv, description } = value;

  return (
    <div
      className={classes.blockForContent}
      onClick={() => router(`/beer/${currentPage}/${id}`)}
    >
      <p className={classes.TitleOfBeer}> {name}</p>
      <img
        src={image_url}
        className={classes.content_picture}
        alt={"PictureOfSomethingBeer"}
      />
      <img
        src={PitureButtonForOrder}
        className={classes.ForOrder}
        alt={"PitureButtonForOrder"}
        onClick={(event) => {
          addOrder({ 
            id:Date.now(),
            image_url,
            abv,
            key:Date.now()}), 
            event.stopPropagation()
        }}
        onMouseOver={(event) => (event.currentTarget.src = blackButtonForOrder)}
        onMouseOut={(event) => (event.currentTarget.src = PitureButtonForOrder)}
      />
      <p className={classes.abv}>{abv} %</p>
      <p className={classes.TitleDescription}>Description</p>
      <p className={classes.description}>{CheckDesc(description)}</p>
    </div>
  );
};

export default BlockOfContent;
