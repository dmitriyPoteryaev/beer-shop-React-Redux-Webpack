import {setDataBeer} from '../reducers/BeerReducer';
import {setErrorBeer} from '../reducers/BeerReducer';
import {setisLoadingBeer} from '../reducers/BeerReducer';

import axios from "axios";

export const fetchBeer= ()=>{
return  async function(dispatch){

    
         

         
try{

    const res = await  axios.get( `http://localhost:3000/allbeer`);
    dispatch(setDataBeer(res.data))
  

}
catch(e){
    dispatch(setErrorBeer(e.message)) 

}
finally{

    dispatch(setisLoadingBeer(false))

}
 

}


        



}

