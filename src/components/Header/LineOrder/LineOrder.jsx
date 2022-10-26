import React from "react";
import './LineOrder.css';

import ButtonForOrder from "../../UI/ButtonForOrder/ButtonForOrder";

const LineOrder = ({curPage}) => {
  return (
    <div className="LineOrder">
       <span
       className="curPage"
       >{curPage}</span>
      <ButtonForOrder />
    </div>
  );
};

export default LineOrder;
