import React , {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { useFetching } from "../../../customHooks/useFetching.js";
import { ContentServies } from "../../../API/ContentServies.js";
import classes from './BeerPage.module.scss'

const BeerPage = () => {

    const [currenBeer ,setcurrenBeer]= useState({})

    const params = useParams();
   
 
    const [fetching, isLoading, error] = useFetching(async () => {
        let limit = 25;
       
        const res = await ContentServies.GetQuery(limit,Math.ceil(+params.id/limit));


        setcurrenBeer((res.data.find((elem)=>elem.id===+params.id)))
      
       
    
      });

      useEffect(() => {
        fetching();
      }, [params.id]);
    

    return (
        <div className={classes.container}>
           {/* mobile */}
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
          <div  className={classes.rightColumn_mobile}>
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
          <div  className={classes.rightColumn}>
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
    );
};

export default BeerPage;