import React, { useState, useEffect } from "react";
import BlockOfContent from "../../components/UI/BlockOfContent/BlockOfContent";

// все стили
import "./Content.css";
import "../Link.css";

import Header from "../../components/Header/Header";
import ListPage from "../../components/UI/ListPage/ListPage.jsx";
import Loader from "../../components/UI/Loader/Loader.jsx";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer/Footer";

// все нужны утилиты
import { useSortingContent } from "../../customHooks/useSortingContent.js";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBeer } from "../../Redux/Async/AcynsQuery";

function Content() {
  const dispatch = useDispatch();
  const params = useParams();

  const beer = useSelector((state) => state?.beer?.dataBeer);
  const errorRedux = useSelector((state) => state?.beer?.error);
  const isLoadingRedux = useSelector((state) => state?.beer?.isLoading);

  const [filterSelector, setfilterSelector] = useState("");
  const [filterInput, setfilterInput] = useState("");

  const [currentPage, setcurrentPage] = useState(params.currentPage);
  const [limit, setLimit] = useState(25);

  console.log(beer);




  let curPageWithBeer = [];

  if (beer.length !== 0) {
    curPageWithBeer = useSortingContent(
      beer[0][`beer_${params.currentPage}_limit_${limit}`],
      filterSelector,
      filterInput
    );
  }

  useEffect(() => {
    if (isLoadingRedux) {
      console.log(isLoadingRedux);
      dispatch(fetchBeer());
    }
  }, []);


  useEffect(() => {
    setfilterSelector("");
    setfilterInput("");
  }, [currentPage]);

  return (
    <main className="Link ">
      <Header curPage={"Shop"} />
      {isLoadingRedux ? (
        <Loader />
      ) : errorRedux ? (
        <h1 className="Error">An error has occurred ${errorRedux}</h1>
      ) : (
        <section className="beers">
          {/* распределение пива по крепости */}
          <Filter
            filterSelector={filterSelector}
            setfilterSelector={setfilterSelector}
          />
          {/* Поиск пива в Инпуте */}
          <Search setfilterInput={setfilterInput} />

          <div className="Allcontent">
            <ListPage />

            {curPageWithBeer.length !== 0 ? (
              curPageWithBeer.map((content) => (
                <BlockOfContent value={content} key={content.id} />
              ))
            ) : (
              <h1  className="NotFound">We didn't find beer for your request</h1>
            )}
            <ListPage />
            <Modal></Modal>
          </div>
        </section>
      )}
      <Footer></Footer>
    </main>
  );
}

export default Content;
