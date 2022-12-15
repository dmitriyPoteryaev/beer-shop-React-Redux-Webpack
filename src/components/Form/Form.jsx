import React, { useState } from "react";
import Btn_SendOrder from "../UI/Btn_SendOrder/Btn_SendOrder";
import Attention from "../UI/Attention/Attention";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import "./Form.css";

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

  const [attention, setAttention] = useState(true);

  async function createNewOrder(data, event) {
    const newOrder = {
      FullInfo,
      id: Date.now(),
      data,
    };

    setGoodBye(false);
    // await ContentServies.PostQuery(newOrder);

    setFullInfo({
      Name: "",
      Phone: "",
      Adress: "",
    });

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
      <Btn_SendOrder
        FullInfo={FullInfo}
        createNewOrder={createNewOrder}
        TimeAttention={TimeAttention}
      >
        Send
      </Btn_SendOrder>
    </div>
  );
};

export default Form;
