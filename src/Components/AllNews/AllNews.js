import React from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import News from '../News/News';

const AllNews = () => {
    const [news,setNews]=useState([])
    useEffect(()=>{
      fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=c4100b1a254a45c29cf6c9d81ec56478')
      .then(res=>res.json())
      .then(data=> setNews(data.articles))
    },[])
    console.log(news);
    return (
        <div>
              <Row xs={1} md={3} className="g-4">
            {
                news.map(nws=> <News news={nws}></News>)
            }
        </Row>
        </div>
    );
};

export default AllNews;