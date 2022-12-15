import React from "react";
import './LineOrder.css';

import Btn_Order from "../../UI/Btn_Order/Btn_Order";

const LineOrder = ({curPage}) => {
  return (
    <div className="LineOrder">
       <span
       className="curPage"
       >{curPage}</span>
      <Btn_Order />
    </div>
  );
};

export default LineOrder;
