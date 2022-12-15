import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBeer } from "../../Redux/ReduxThunk/ReduxThunk.js";
import Loader from "../../components/UI/Loader/Loader";
// все нужные компоненты
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Modal_order from "../../components/Modal_order/Modal_order";

import "./BeerPage.scss";
import "../Link.css";

const BeerPage = () => {
  const beer = useSelector((state) => state.beer.dataBeer);
  const errorRedux = useSelector((state) => state.beer.error);
  const isLoadingRedux = useSelector((state) => state.beer.isLoading);

  const params = useParams();
  const dispatch = useDispatch();
  let cur_beer = beer.find((elem) => elem.name === params.name);

  useEffect(() => {
    if (isLoadingRedux) {
      dispatch(fetchBeer(params.currentPage));
    }
  }, []);

  function addOrder(order) {
    dispatch({ type: "ADD_ORDER", payload: order });
  }

  return (
    <main className="Link">
      <Header
        curPage={
          typeof cur_beer?.nam && typeof cur_beer?.abv === "undefined"
            ? ""
            : `${cur_beer.name}. Abv - ${cur_beer.abv} %`
        }
      />
      {isLoadingRedux ? (
        <Loader />
      ) : !Object.values(cur_beer).some((el) => !!el == false) ? (
        <section className="pageBeer">
          <div className="wrapper">
            {/* desctop screen */}

            <div className="block-aboutBeer">
              <div className="block-picture">
                <img
                  className="block-picture__picture"
                  src={cur_beer.image_url}
                />
                <span className="block-picture__abv">{cur_beer.abv} %</span>
              </div>
              <aside className="block-desc">
                <div className="block-desc__beerName">{cur_beer.name}</div>
                <h1 className="block-desc__tagline">{cur_beer.tagline}</h1>
                <div className="block-desc__Desc">{cur_beer.description}</div>
                <button className="block-desc__order"  onClick={() => {
                      addOrder({
                        id: Date.now(),
                        image_url: cur_beer.image_url,
                        abv: cur_beer.abv,
                        key: Date.now(),
                      })}}
                   >
                  Order 
                
                </button>
              </aside>
            </div>

            {/* <div className="food_pairing"> 
              <h2>What food to eat with this beer?</h2>
              {cur_beer.food_pairing}
            </div>*/}
          </div>
        </section>
      ) : (
        <h1 className="pageDesc">
          Unfortunately, not all information has been generated for this
          request.
        </h1>
      )}
      <Modal_order></Modal_order>
      <Footer />
    </main>
  );
};

export default BeerPage;
