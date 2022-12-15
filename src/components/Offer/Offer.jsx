
// нужные библиотеки
import React from "react";

// стили
import "./Offer.css";

// нужные утилиты
import CheckDesc from "../../util/CheckDesc";

const Offer = ({ opportinity, photo }) => {
  return (
    // sign - это блок. НЕ ЭЛЕМЕНТ

    <figure className="sign">
      <img src={photo} className="sign__img" alt="image" />
      <label className="excerpt">
        <input className="excerpt__text" type="checkbox" /> Read more
      </label>
      <figcaption className="sign__incompleteDesc">
        {CheckDesc(opportinity, 150)}
      </figcaption>
      <figcaption className="sign__completeDesc">{opportinity}</figcaption>
    </figure>
  );
};

export default Offer;
