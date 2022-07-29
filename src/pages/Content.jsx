import React, { useState, useEffect } from "react";
import BlockOfContent from "../components/BlockOfContent/BlockOfContent.jsx";
import "../style/style.scss";
import cross from "../assets/cross.png";

import BlockForOrder from "../components/UI/BlockForOrder/BlockForOrder.jsx";
import ButtonForBackOrSendOrder from "../components/UI/ButtonForBackOrSendOrder/ButtonForBackOrSendOrder.jsx";
import ModalForOrder from "../components/UI/ModalForOrder/ModalForOrder.jsx";

import Header from "../Header.jsx";
import Sorting from "../Sorting.jsx";
import { useSortingContent } from "../customHooks/useSortingContent.js";
import Form from "../Form.jsx";
import { useFetching } from "../customHooks/useFetching.js";
import Loader from "../components/UI/Loader/Loader.jsx";
import { ContentServies } from "../API/ContentServies.js";
import GoodBye from "../components/UI/GoodBye/GoodBye.jsx";
import Input from "../Input.jsx";
import getPages from "../utilits/getPages.js";
import ListPage from "../components/UI/ListPage/ListPage.jsx";
import {useParams} from 'react-router-dom';

function Content() {
  const [visiableOfModal, setVisiableOfModal] = useState(false);
  const [positionForOrder, setPositionForOrder] = useState([]);
  const [goodBye, setGoodBye] = useState(true);
  const [filterSelector, setfilterSelector] = useState("");
  const [filterInput, setfilterInput] = useState("");
  const [somethingContent, setSomethingContent] = useState([]);


  // всё что относится к пагинации
  const [TotalCount, setTotalCount] = useState(325);
  const [TotalPages, setTotalPages] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [limit, setLimit] = useState(25);

  const Content = useSortingContent(somethingContent, filterSelector,filterInput);

  const [fetching, isLoading, error] = useFetching(async () => {
    setfilterSelector("");
    const res = await ContentServies.GetQuery(limit,currentPage);
    setSomethingContent(res.data);
    setTotalPages(getPages(TotalCount,limit))

  });

  const params = useParams();



  useEffect(() => {
    setcurrentPage(params.currentPage)


    
  }, [params.currentPage]);

  useEffect(() => {
    fetching();

    
  }, [currentPage]);

  const removeOrderPosition = (orderPosition) => {
    setPositionForOrder(
      positionForOrder.filter((position) => position.id !== orderPosition.id)
    );
  };

 
  return (
    <div >
      <Header
        quality={positionForOrder.length}
        getVisModal={setVisiableOfModal}
      />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <h1 className="Error">Произошла ошибка ${error}</h1>
      ) : (
        <div>
          <div className="Filter">
            <Sorting
              filterSelector={filterSelector}
              setfilterSelector={setfilterSelector}
            />
          </div>
          <Input
          setfilterInput={setfilterInput}
          /> 
       <ListPage 
       TotalPages={TotalPages}
       currentPage={currentPage}
       />  
          <div className="Allcontent">
            {Content.length!==0
            ?
           ( Content.map((content) => (
              <BlockOfContent
                value={content}
                key={content.id}
                addThingForOrder={setPositionForOrder}
                quantityThingForOrder1={positionForOrder}
                currentPage={currentPage}
              />
            )))
            :
          (<h1>Мы не нашли по Вашему запросу пиво</h1>)
          }
         <ListPage 
       TotalPages={TotalPages}
       currentPage={currentPage}
       />  

            <ModalForOrder
              visiable={visiableOfModal}
              funcForModal2={setVisiableOfModal}
              quantityThingForOrder={positionForOrder}
              setGoodBye={setGoodBye}
            >
              {goodBye ? (
                positionForOrder.length !== 0 ? (
                  <div className="ContetnForOrder">
                    <div className="HeaderOfModal">
                      <h1 className="TitleNothingOrder">Корзина</h1>
                      <img
                        src={cross}
                        className="cross"
                        onClick={() => setVisiableOfModal(false)}
                      />
                    </div>
                    <div className="FullInfoAboutThingOrder">
                      Товары в корзине
                    </div>
                    {positionForOrder.map((contentForOrder) => (
                      <BlockForOrder
                        value={contentForOrder}
                        key={contentForOrder.id}
                        remove={removeOrderPosition}
                      />
                    ))}
                    <p className="FullInfoAboutClient">Оформить заказ</p>
                    <Form
                      quantityThingForOrder={positionForOrder.length}
                      visiable={visiableOfModal}
                      ThingForOrderForm={positionForOrder}
                      setPositionForOrder={setPositionForOrder}
                      setGoodBye={setGoodBye}
                    />
                  </div>
                ) : (
                  <div className="NothingOrder">
                    <div className="HeaderOfModal">
                      <h1 className="TitleNothingOrder">Корзина</h1>
                      <img
                        src={cross}
                        className="cross"
                        onClick={() => setVisiableOfModal(false)}
                      />
                    </div>
                    <div className="AttenrionNothingOrder">
                      Пока что вы ничего не добавли в корзину
                    </div>
                    <ButtonForBackOrSendOrder
                      funcModChoice={setVisiableOfModal}
                    >
                      Перейти к выбору
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
