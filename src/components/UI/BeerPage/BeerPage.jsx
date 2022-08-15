import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './BeerPage.module.scss'
import { useSelector } from "react-redux";
const BeerPage = () => {
  const beer = useSelector((state) => state.beer.dataBeer);

  const [currenBeer, setcurrenBeer] = useState({})

  const params = useParams();
  let limit = 25;

  function GetBEER() {


    setcurrenBeer((beer[0][`beer_${params.currentPage}_limit_${limit}`].find((elem) => elem.name === params.name)))


  };

  useEffect(() => {
    GetBEER();
  }, [params.name]);


  return (

    <div >
      {/* mobile */}

      {!Object.values(currenBeer).some(el => !!el == false)
        ?
        <div className={classes.container}>
          <div>
            <div className={classes.beerName_mobile}>{currenBeer.name}</div>
            <h1 className={classes.tagline_mobile}>{currenBeer.tagline}</h1>
          </div>
          <div className={classes.leftColumn_mobile} >
            <img src={
              currenBeer.image_url
            }
            />
            <div className={classes.abv_mobile}>{currenBeer.abv}%</div>
          </div>
          <div className={classes.rightColumn_mobile}>
            <div className={classes.beerFulldescription_mobile}>
              <div className={classes.beerDescription_mobile}>{currenBeer.description}</div>
            </div>
            <div className={classes.food_pairing}>
              <h2>What food to eat with this beer?</h2>
              {currenBeer.food_pairing}</div>
          </div>

          {/* full screen */}

          <div className={classes.leftColumn} >
            <img src={
              currenBeer.image_url
            }
            />
            <div className={classes.abv}>{currenBeer.abv}%</div>
          </div>
          <div className={classes.rightColumn}>
            <div className={classes.beerFulldescription}>
              <div className={classes.beerName}>{currenBeer.name}</div>
              <h1 className={classes.tagline}>{currenBeer.tagline}</h1>
              <div className={classes.beerDescription}>{currenBeer.description}</div>
            </div>
            <div className={classes.food_pairing}>
              <h2>What food to eat with this beer?</h2>
              {currenBeer.food_pairing}</div>
          </div>
        </div>
        :
        <h1 className={classes.container}>
          Unfortunately, not all information has been generated for this request.
        </h1>}

    </div>

  );
};











export default BeerPage;