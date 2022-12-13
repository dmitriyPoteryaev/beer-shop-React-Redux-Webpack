import React from "react";
import classes from "./BlockOfContent.module.css";
import PitureButtonForOrder from "../../../assets/PitureButtonForOrder.png";
import blackButtonForOrder from "../../../assets/blackButtonForOrder.png";
import CheckDesc from "../../../utilits/CheckDesc.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
    <section
      className={classes.pageContent}
      onClick={() => router(`/beer/${params.currentPage}/${name}`)}
    >
      <div className={classes.wrap}>
        <img
          src={PitureButtonForOrder}
          className={classes.pageContent__btnOrder}
          alt={"ButtonForOrder"}
          onClick={(event) => {
            addOrder({
              id: Date.now(),
              image_url:  image_url,
              abv:abv,
              key: Date.now(),
            }),
              event.stopPropagation();
          }}
          onMouseOver={(event) =>
            (event.currentTarget.src = blackButtonForOrder)
          }
          onMouseOut={(event) =>
            (event.currentTarget.src = PitureButtonForOrder)
          }
        />
        <img
          src={image_url}
          className={classes.content_picture}
          alt={"SomthBeer"}
        />
        <article className={classes.desciption}>
          <span className={classes.desciption__titleBeer}>
            {name} <p className={classes.pageContent__abv}>{abv} %</p>
          </span>
          <p>{CheckDesc(description, 140)}</p>
        </article>
      </div>
    </section>
  );
};

export default BlockOfContent;
