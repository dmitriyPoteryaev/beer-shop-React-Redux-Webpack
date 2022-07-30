import React, { useState } from "react";
import { ContentServies } from "./API/ContentServies.js";
import ButtonForBackOrSendOrder from "./components/UI/ButtonForBackOrSendOrder/ButtonForBackOrSendOrder.jsx";
import Attention from "./utilits/Attention/Attention.jsx";
import InputMask from "react-input-mask";

const Form = ({
  quantityThingForOrder,
  visiable,
  ThingForOrderForm,
  setPositionForOrder,
  setGoodBye
}) => {
  const [FullInfo, setFullInfo] = useState({
    Name: "",
    Phone: "",
    Adress: "",
  });

  const [attention, setAttention] = useState(true);

  const newOrder = { ...FullInfo, id: Date.now(), ThingForOrderForm };

  async function createNewOrder(data) {
    await ContentServies.PostQuery(data);

    setFullInfo({
      Name: "",
      Phone: "",
      Adress: "",
    });
    setGoodBye(false)
    setPositionForOrder("");

  }

  function TimeAttention() {
    setAttention(false);

    setTimeout(() => {
      setAttention(true);
    }, 3000);
  }

  return (
    <div>
      <form>
      <Attention visiable={attention} />
        <input
          type="text"
          placeholder="Ваше имя"
          value={FullInfo.Name}
          className="InfoAboutClient"
          onChange={(event) =>
            setFullInfo({ ...FullInfo, Name: event.target.value })
          }
        ></input>

        <InputMask
          mask="+79 99 999-99-99"
          value={FullInfo.Phone}
          onChange={(event) =>
            setFullInfo({ ...FullInfo, Phone: event.target.value })
          }
          className="InfoAboutClient"
        >
          {() => (
            <input
              placeholder="Телефон"
              type="tel"
              className="InfoAboutClient"
            />
          )}
        </InputMask>
        <input
          type="text"
          placeholder="Адрес"
          value={FullInfo.Adress}
          className="InfoAboutClient"
          onChange={(event) =>
            setFullInfo({ ...FullInfo, Adress: event.target.value })
          }
        ></input>
      </form>
      <ButtonForBackOrSendOrder
        createNewOrder={createNewOrder}
        newOrder={newOrder}
        quantityThingForOrder={quantityThingForOrder}
        visiable={visiable}
        setFullInfo={setFullInfo}
        TimeAttention={TimeAttention}
      >
        Send
      </ButtonForBackOrSendOrder>

      
    </div>
  );
};

export default Form;
