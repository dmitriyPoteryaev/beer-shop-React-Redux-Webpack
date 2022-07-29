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
            <div className={classes.tagline}>{currenBeer.tagline}</div>
            <div className={classes.beerDescription}>{currenBeer.description}</div>
            <div>{currenBeer.food_pairing}</div>
            </div>
            </div>
        </div>
    );
};

export default BeerPage;