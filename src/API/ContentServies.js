

import axios from "axios";



export   class  ContentServies{


// ранее здесь был в такой url - https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit} .Я в него кидал определённый лимит (какое кол-во пива должно отобраться на странице)
//  и пробрасывал туда параметр , отвечающий за то какую именно страницу нужно показывать.
// После частого использовния API , при открытии страницы на gh-pages  у меня появлялась ошибка -429. После этого решил использовать json-server

    
static async GetQuery  (limit=25, page=1) {

   
     const response = await axios.get( `http://localhost:3000/allbeer`);

     

    return response;
}


static async PostQuery  (order) {
    const response = await axios.post('http://localhost:3000/requests',{
        order 
    });

 
}

}

