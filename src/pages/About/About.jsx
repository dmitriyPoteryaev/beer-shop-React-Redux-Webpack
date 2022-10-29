// нужные нам библотеки
import React from "react";

// все стили
import "./AboutUs.css";
import "../Link.css";

// все нужные компоненты
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Offer from "../../components/Offer/Offer";

// все данные с бека для отображения возможностей
import * as offers from "../../JSON/Offer.json";

const About = () => {
  return (
    <main className="Link ">
      <Header curPage={"About Us"}></Header>

      <section className="pageDesc">
        {/* Самое верхнее описание */}
        <div className="wrapper">
          <article className="info">
            <p className="info__text">
              BrewDog is a brewery, bar chain, and brand with a capital B. It
              launched in Aberdeenshire, Scotland in 2007, and was founded by
              friends James Watt and Martin Dickie. Since then, BrewDog has
              expanded into a multinational company with nearly 100 locations,
              and more than 1,000 employees around the world. Begging to know
              more? Here are 3 things you should know about BrewDog.
            </p>
          </article>
        </div>

        {/* Возможности */}
        <div className="wrapper">
          <article className="opportinity">
            {Object.values(offers.default).map((offer) => (
              <Offer
                photo={offer.photo}
                opportinity={offer.opportinity}
              ></Offer>
            ))}
          </article>
        </div>

        {/* Последняя строка с видосом */}
        <div className="wrapper">
          <div className="content">
            <iframe
              className="content__video"
              src="https://www.youtube.com/embed/g9xf8tudbrs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default About;
