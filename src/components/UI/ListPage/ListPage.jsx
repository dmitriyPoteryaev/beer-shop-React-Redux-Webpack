import React, { useState,useEffect } from "react";
import {useParams} from  'react-router-dom'
import { Link } from "react-router-dom";

const ListPage = ({ TotalPages }) => {

   const params = useParams()

   useEffect(() => {

    params.currentPage==1
    ?
    setbordTotalPages(TotalPages.filter((elem)=>elem<=+params.currentPage+5))
    :
    params.currentPage>=TotalPages.length-5
    ?
    setbordTotalPages(TotalPages.filter((elem)=>elem>=(TotalPages.length-5)&&elem<=(TotalPages.length)))
    :
    setbordTotalPages(TotalPages.filter((elem)=>elem>=(+params.currentPage)&&elem<=(+params.currentPage+5)))

   }, [ params.currentPage])
   

   const [bordTotalPages, setbordTotalPages]= useState([])


  return (
    <div className="BlockPages">
       <Link
       className="Prev"
        to={`/beer/${
      +params.currentPage==1
      ?
      params.currentPage=1
      :
      +params.currentPage-1
      }`}>Previous</Link>
      {bordTotalPages.map((pages) => 
       

        params.currentPage==pages
        ?
        <div
          className="PageActive" 
          key={pages}
          
        >
          {pages}
        </div>
        :
        <div
        className='Page'
        key={pages}
        
        >
         
{pages}
        </div>
        
      
      )}

      <Link 
      className="Next"
      to={`/beer/${
      +params.currentPage==13
      ?
      params.currentPage=13
      :
      +params.currentPage+1}`}>Next</Link>
      </div>
    
  );
};

export default ListPage;
