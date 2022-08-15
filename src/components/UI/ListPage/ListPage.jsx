import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ListPage = () => {
  const params = useParams();

  const [TotalCount, setTotalCount] = useState(325);
  const [TotalPage, setTotalPages] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [limit, setLimit] = useState(25);
  
const TotalPages = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  useEffect(() => {
    params.currentPage == 1
      ? setbordTotalPages(
          TotalPages.filter((elem) => elem <= +params.currentPage + 5)
        )
      : params.currentPage >= TotalPages.length - 5
      ? setbordTotalPages(
          TotalPages.filter(
            (elem) => elem >= TotalPages.length - 5 && elem <= TotalPages.length
          )
        )
      : setbordTotalPages(
          TotalPages.filter(
            (elem) =>
              elem >= +params.currentPage && elem <= +params.currentPage + 5
          )
        );
  }, [params.currentPage]);

  const [bordTotalPages, setbordTotalPages] = useState([]);

  console.log(bordTotalPages)

  return (
    <div className="BlockPages">
      <Link
        className="Prev"
        to={`/beer/${
          +params.currentPage == 1
            ? (params.currentPage = 1)
            : +params.currentPage - 1
        }`}
      >
        Previous
      </Link>
      {bordTotalPages.map((pages) =>
        params.currentPage == pages ? (
          <Link 
          className="PageActive"
          key={pages}
          to={`/beer/${
            pages
          }`}
          >
           {pages}</Link>
           ): (
          <Link className="Page"
           key={pages}
           to={`/beer/${
            pages
          }`}
           >
            {pages}
          </Link>
        )
      )}

      <Link
        className="Next"
        to={`/beer/${
          +params.currentPage == TotalPages.length
            ? (params.currentPage = TotalPages.length)
            : +params.currentPage + 1
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default ListPage;
