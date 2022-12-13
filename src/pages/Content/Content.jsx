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
import ModalForOrder from "../../components/ModalForOrder/ModalForOrder";
import Footer from "../../components/Footer/Footer";

// все нужны утилиты
import { useSortingContent } from "../../customHooks/useSortingContent.js";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchBeer } from "../../Redux/ReduxThunk/ReduxThunk";

// Swiper
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper стиили
import "swiper/css";

import "swiper/css/pagination";
// скроллбар, чтобы линия была внизу
import "swiper/css/scrollbar";

function Content() {
  const dispatch = useDispatch();
  const params = useParams();

  const beer = useSelector((state) => state.beer.dataBeer);
  const errorRedux = useSelector((state) => state.beer.error);
  const isLoadingRedux = useSelector((state) => state.beer.isLoading);

  const [filterSelector, setfilterSelector] = useState("");
  const [filterInput, setfilterInput] = useState("");

  let curPageWithBeer = useSortingContent(beer, filterSelector, filterInput);

  useEffect(() => {
    setfilterSelector("");
    setfilterInput("");
    dispatch(fetchBeer(params.currentPage));
  }, [params.currentPage]);


  return (
    <main className="Link">
      <Header curPage={"Shop"} />
      {isLoadingRedux ? (
        <Loader />
      ) : errorRedux ? (
        <h1 className="Error">{errorRedux}</h1>
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
              <Swiper
                modules={[Pagination, Scrollbar, A11y]}
                spaceBetween={250}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={(event) => console.log(event.activeIndex)}
                onSwiper={(event) => event.activeIndex}
                className="slide"
              >
                {curPageWithBeer.map((content) => (
                  <SwiperSlide>
                    <BlockOfContent value={content} key={content.id} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <h1 className="NotFound">We didn't find beer for your request</h1>
            )}
          </div>
          <ModalForOrder></ModalForOrder>
        </section>
      )}
      <Footer></Footer>
    </main>
  );
}

export default Content;
