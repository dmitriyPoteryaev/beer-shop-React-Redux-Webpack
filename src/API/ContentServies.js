

import axios from "axios";



export   class  ContentServies{


// ранее здесь был локальный url .За счёт этого фронт куртился на локальному порту через json-server
    
static async GetQuery  (limit=25, page=1) {

   
     const response = await axios.get(` http://localhost:3000/beer_${page}_limit_${limit}`);
   
     console.log(response)
    
    return response;
}

    
static async GetQueryById  (id) {

   

   
    const response = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);
  
   
   return response;
}

}

