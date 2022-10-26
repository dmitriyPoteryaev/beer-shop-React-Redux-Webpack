import React from "react";
import "./WhatWeOffer.css";
import CheckDesc from "../../utilits/CheckDesc";


const WhatWeOffer = ({description,photo}) => {

  return (
    <div className="sign">
    <figure >
    <img src={photo}
    className="Image"
     alt="SomeThOpportunity"/>
        <label className="ReadMore">
<input className="modeMoreInfornation"type='checkbox'/> Read more 
</label>
    <figcaption className="NotFullDec">{CheckDesc(description,150)}</figcaption>
    <figcaption className="FullDec">{description}</figcaption>
   </figure>

   </div>
  );
};

export default WhatWeOffer;
