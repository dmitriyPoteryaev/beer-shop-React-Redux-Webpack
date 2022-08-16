import React, { useState, useEffect } from "react";
import BlockOfContent from "../components/BlockOfContent/BlockOfContent.jsx";
import "../../style/style.scss";
import cross from "../assets/cross.png";
import BlockForOrder from "../components/UI/BlockForOrder/BlockForOrder.jsx";
import ButtonForBackOrSendOrder from "../components/UI/ButtonForBackOrSendOrder/ButtonForBackOrSendOrder.jsx";
import ModalForOrder from "../components/UI/ModalForOrder/ModalForOrder.jsx";
import Header from "../Header.jsx";
import Sorting from "../Sorting.jsx";
import { useSortingContent } from "../customHooks/useSortingContent.js";
import Form from "../Form.jsx";
import Loader from "../components/UI/Loader/Loader.jsx";
import GoodBye from "../components/UI/GoodBye/GoodBye.jsx";
import Input from "../Input.jsx";
import ListPage from "../components/UI/ListPage/ListPage.jsx";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBeer } from "../Redux/Async/AcynsQuery";
function Content() {
  const dispatch = useDispatch();
  const params = useParams();

  const beer = useSelector((state) => state.beer.dataBeer);
  const errorRedux = useSelector((state) => state.beer.error);
  const isLoadingRedux = useSelector((state) => state.beer.isLoading);
  const qualityOrder = useSelector((state) => state.order.OrderPosition.length);

  const [goodBye, setGoodBye] = useState(true);
  const [filterSelector, setfilterSelector] = useState("");
  const [filterInput, setfilterInput] = useState("");

  // всё что относится к пагинации

  const [currentPage, setcurrentPage] = useState(1);
  const [limit, setLimit] = useState(25);

  function HideMod(hide) {
    dispatch({ type: "HIDE_MOD", payload: hide });
  }

  useEffect(() => {
    setcurrentPage(params.currentPage);
  }, [params.currentPage]);

  useEffect(() => {
    if (isLoadingRedux) {
      dispatch(fetchBeer());
    
    }
  }, []);

  useEffect(() => {
    setfilterSelector("");
    setfilterInput("");
  }, [currentPage]);


  return (
    <div>
      <Header />

      {isLoadingRedux ? (
        <Loader />
      ) : errorRedux ? (
        <h1 className="Error">An error has occurred ${errorRedux}</h1>
      ) : (
        <div>
          <div className="Filter">
            <Sorting
              filterSelector={filterSelector}
              setfilterSelector={setfilterSelector}
            />
          </div>
          <Input setfilterInput={setfilterInput} />

          <div className="Allcontent">
            <ListPage />

            {useSortingContent(
              beer[0][`beer_${currentPage}_limit_${limit}`],
              filterSelector,
              filterInput
            ).length !== 0 ? (
              useSortingContent(
                beer[0][`beer_${currentPage}_limit_${limit}`],
                filterSelector,
                filterInput
              ).map((content) => (
                <BlockOfContent
                  value={content}
                  key={content.id}
                  currentPage={currentPage}
                />
              ))
            ) : (
              <h1>We didn't find beer for your request</h1>
            )}
            <ListPage />
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
        </div>
      )}
    </div>
  );
}

export default Content;
