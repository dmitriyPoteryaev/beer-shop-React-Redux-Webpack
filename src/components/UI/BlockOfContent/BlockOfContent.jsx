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
      <img
        src={image_url}
        className={classes.content_picture}
        alt={"SomthBeer"}
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
      {/* здесь будет блок с полным описанием пива */}
    
     
          <p className={classes.descBeer__title}> {name}</p>
          <p className={classes.descBeer__titleDesc}>Description</p>
          <article className={classes.descBeer__desc}>
            {CheckDesc(description, 140)}
          </article>
     
 
       {/* здесь будет блок с полным описанием пива */}
    </div>
  );
};

export default BlockOfContent;
