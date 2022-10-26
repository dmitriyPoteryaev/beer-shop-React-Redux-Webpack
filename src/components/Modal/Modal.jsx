import "./Modal.css";
import React,{useState} from "react";
import GoodBye from "../UI/GoodBye/GoodBye";
import ModalForOrder from '../UI/ModalForOrder/ModalForOrder'
import BlockForOrder from '../UI/BlockForOrder/BlockForOrder'
import Form from '../Form/Form'
import ButtonForBackOrSendOrder from '../UI/ButtonForBackOrSendOrder/ButtonForBackOrSendOrder'
import {useSelector} from 'react-redux';
import cross from "../../assets/cross.png";


const Modal = () => {

    
  const [goodBye, setGoodBye] = useState(true);


  const qualityOrder = useSelector((state) => state.order.OrderPosition.length);

  return (
    <div>
      <ModalForOrder setGoodBye={setGoodBye}>
        {goodBye ? (
          qualityOrder !== 0 ? (
            <div className="ContetnForOrder">
              <div className="HeaderOfModal">
                <h1 className="TitleNothingOrder">Basket</h1>
                <img
                  src={cross}
                  className="cross"
                  onClick={() => HideMod(false)}
                />
              </div>
              <div className="FullInfoAboutThingOrder">
                Products in the basket
              </div>
              <BlockForOrder />
              <p className="FullInfoAboutClient">Place an order</p>
              <Form setGoodBye={setGoodBye} />
            </div>
          ) : (
            <div className="NothingOrder">
              <div className="HeaderOfModal">
                <h1 className="TitleNothingOrder">Basket</h1>
                <img
                  src={cross}
                  className="cross"
                  onClick={() => HideMod(false)}
                />
              </div>
              <div className="AttenrionNothingOrder">
                So far you haven't added anything to the cart
              </div>
              <ButtonForBackOrSendOrder>
                Go to the selection
              </ButtonForBackOrSendOrder>
            </div>
          )
        ) : (
          <GoodBye setGoodBye={setGoodBye} />
        )}
      </ModalForOrder>
    </div>
  );
};

export default Modal;
