import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./BeerPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchBeer } from "../../../Redux/Async/AcynsQuery.js";
import Loader from "../Loader/Loader";

const BeerPage = () => {
  const beer = useSelector((state) => state.beer.dataBeer);
  const errorRedux = useSelector((state) => state.beer.error);
  const isLoadingRedux = useSelector((state) => state.beer.isLoading);

  const [currentBeer, setcurrentBeer] = useState({});

  const params = useParams();

  const dispatch = useDispatch();

  let cur_beer =beer.find((elem) => elem.name === params.name);

console.log(cur_beer)
  useEffect(() => {
    if(isLoadingRedux) {

    dispatch(fetchBeer(params.currentPage))}
  }, []) 


  return (
    <div>
           {/* mobile screen */}

           {isLoadingRedux
      ?
<Loader/>
      :
      !Object.values(cur_beer).some((el) => !!el == false) ? (
        <div className={classes.container}>
          <div>
            <div className={classes.beerName_mobile}>{cur_beer.name}</div>
            <h1 className={classes.tagline_mobile}>{cur_beer.tagline}</h1>
          </div>
          <div className={classes.leftColumn_mobile}>
            <img src={cur_beer.image_url} />
            <div className={classes.abv_mobile}>{cur_beer.abv}%</div>
          </div>
          <div className={classes.rightColumn_mobile}>
            <div className={classes.beerFulldescription_mobile}>
              <div className={classes.beerDescription_mobile}>
                {cur_beer.description}
              </div>
            </div>
            <div className={classes.food_pairing}>
              <h2>What food to eat with this beer?</h2>
              {cur_beer.food_pairing}
            </div>
          </div>

          {/* desctop screen */}

          <div className={classes.leftColumn}>
            <img src={cur_beer.image_url} />
            <div className={classes.abv}>{cur_beer.abv}%</div>
          </div>
          <div className={classes.rightColumn}>
            <div className={classes.beerFulldescription}>
              <div className={classes.beerName}>{cur_beer.name}</div>
              <h1 className={classes.tagline}>{cur_beer.tagline}</h1>
              <div className={classes.beerDescription}>
                {cur_beer?.description}
              </div>
            </div>
            <div className={classes.food_pairing}>
              <h2>What food to eat with this beer?</h2>
              {cur_beer?.food_pairing}
            </div>
          </div>
        </div>
      ) : (
        <h1 className={classes.container}>
          Unfortunately, not all information has been generated for this
          request.
        </h1>
      )
      }
    </div>
  );
};

export default BeerPage;
