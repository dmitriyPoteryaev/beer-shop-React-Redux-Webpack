import {setDataBeer} from '../reducers/BeerReducer';
import {setErrorBeer} from '../reducers/BeerReducer';
import {setisLoadingBeer} from '../reducers/BeerReducer';

import axios from "axios";

export const fetchBeer= ()=>{
return  async function(dispatch){
    
try{
    // https://raw.githubusercontent.com/DHDHFFHDHDHFVHvhb/dbForBeer/main/db1.json
    const res = await  axios.get( `https://raw.githubusercontent.com/DHDHFFHDHDHFVHvhb/dbForBeer/main/db1.json `);

    dispatch(setDataBeer(res.data.allbeer))
  

}
catch(e){
    dispatch(setErrorBeer(e.message)) 

}
finally{

    dispatch(setisLoadingBeer(false))

}
 

}


        



}

