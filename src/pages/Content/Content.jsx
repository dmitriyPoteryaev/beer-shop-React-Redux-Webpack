import React, { useState, useEffect } from "react";
import BlockOfContent from "../../components/BlockOfContent/BlockOfContent";
import "../../../style/style.scss";
import Header from "../../components/Header/Header";
import Sorting from "../../components/Sorting/Sorting";
import { useSortingContent } from "../../customHooks/useSortingContent.js";
import Loader from "../../components/UI/Loader/Loader.jsx";
import Seach from "../../components/Seach/Search";
import ListPage from "../../components/UI/ListPage/ListPage.jsx";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBeer } from "../../Redux/Async/AcynsQuery";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer/Footer";

function Content() {
  const dispatch = useDispatch();
  const params = useParams();

  const beer = useSelector((state) => state.beer.dataBeer);
  const errorRedux = useSelector((state) => state.beer.error);
  const isLoadingRedux = useSelector((state) => state.beer.isLoading);

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
      <Header
      curPage={'Shop'}
      />

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
          <Seach setfilterInput={setfilterInput} />

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
            <Modal></Modal>
          </div>
        </div>
      )}
       <Footer></Footer>
    </div>
  );
}

export default Content;
