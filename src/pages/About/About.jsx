import React from "react";
import "./About.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import WhatWeOffer from "../../components/WhatWeOffer/WhatWeOffer";
import * as offers from "../../JSON/WhatWeoffer.json";

const About = () => {
  return (
    <main className="About">
      <Header curPage={"About Us"}></Header>

      <section className="Desctiption">
        <p>
          BrewDog is a brewery, bar chain, and brand with a capital B. It
          launched in Aberdeenshire, Scotland in 2007, and was founded by
          friends James Watt and Martin Dickie. Since then, BrewDog has expanded
          into a multinational company with nearly 100 locations, and more than
          1,000 employees around the world. Begging to know more? Here are 3
          things you should know about BrewDog.
        </p>
      </section>
      <article className="AllOpportinity">
        {Object.values(offers.default).map((offer) => (
          <WhatWeOffer
            photo={offer.photo}
            description={offer.description}
          ></WhatWeOffer>
        ))}
      </article>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/g9xf8tudbrs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Footer></Footer>
    </main>
  );
};

export default About;
