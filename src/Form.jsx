import React, { useState } from "react";
import { ContentServies } from "./API/ContentServies.js";
import ButtonForBackOrSendOrder from "./components/UI/ButtonForBackOrSendOrder/ButtonForBackOrSendOrder.jsx";
import Attention from "./utilits/Attention/Attention.jsx";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";

const Form = ({ setGoodBye }) => {
  const dispatch = useDispatch();

  function DeleteAllOrders() {
    dispatch({ type: "ALL_DELETE_ORDER", payload: [] });
  }


  const [FullInfo, setFullInfo] = useState({
    Name: "",
    Phone: "",
    Adress: "",
  });

  console.log(FullInfo)

  const [attention, setAttention] = useState(true);

 

  async function createNewOrder(data) {

    const newOrder = { 
      FullInfo,
      id: Date.now(),
       data };

    await ContentServies.PostQuery(newOrder);

    setFullInfo({
      Name: "",
      Phone: "",
      Adress: "",
    });
    setGoodBye(false);
    DeleteAllOrders();
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
          placeholder="Your name"
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
              placeholder="Telephone"
              type="tel"
              className="InfoAboutClient"
            />
          )}
        </InputMask>
        <input
          type="text"
          placeholder="Adress"
          value={FullInfo.Adress}
          className="InfoAboutClient"
          onChange={(event) =>
            setFullInfo({ ...FullInfo, Adress: event.target.value })
          }
        ></input>
      </form>
      <ButtonForBackOrSendOrder
        FullInfo={FullInfo}
        createNewOrder={createNewOrder}
        TimeAttention={TimeAttention}
      >
        Send
      </ButtonForBackOrSendOrder>
    </div>
  );
};

export default Form;
