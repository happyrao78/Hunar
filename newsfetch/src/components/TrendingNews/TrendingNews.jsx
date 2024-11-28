import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Marquee from 'react-marquee-slider';
import { v4 as uuidv4 } from 'uuid';
// import Slider from '../Slider/Carousel';
import Carousel from '../Slider/Carousel';



function TrendingNews() {
  const [news, setNews] = useState([]);
  const info={
    headline:"Top Business Headlines"
// "* ",
// "* Top Business Headlines",
// "* Top Business Headlines"
  }
  const navigate = useNavigate();
  const defaultImage = 'https://yt3.googleusercontent.com/VbGkSvLpAmSOVxSQ-42YlR4uQjaRbADrBZ0Jbm8rpeI7RiFSEp2_8DJqzgqH4dWViwYOQy2QJnQ=s900-c-k-c0x00ffffff-no-rj';

  useEffect(() => {
    // https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=74816c3690434f50b56a475c71cd3b56
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d8b88c4d740e48eb8db63549b69f230f`)
      .then(response => {
        // console.log(response.data);
        const filteredNews = response.data.articles.filter(article => article.source.name === 'The Times of India' ||  'google-news');
        setNews(filteredNews.slice(0, 20));
      })
      .catch(error => {
        console.error('Error fetching the news', error);
      });
  }, []);

  const handleReadMore = (article) => {
    navigate('/newsdetail', { state: { article } });
  };
  const getFirstWords = (text, wordCount) => {
    return text.split(" ").slice(0, wordCount).join(" ");
  }

  return (
    <>
    <div className="p-5 bg-gray-200  text-center text-5xl mx-auto flex flex-col items-center">
      {/* <h1 className="text-black mb-8 bg-red-400 shadow-lg rounded-lg p-4 animate-pulse  opacity-100"
      >{info.headline.toUpperCase()}</h1> */}
      <h1 className="relative text-black mb-8 shadow-lg rounded-lg p-1  overflow-hidden">
  <span className="absolute inset-0 bg-red-600 dark:bg-blue-600 animate-pulse opacity-75 rounded-lg"></span>
  {/* <Marquee velocity={25}> */}
  <span className="relative">{info.headline.toUpperCase()}
  {/* <Marquee>{info.toUpperCase()}</Marquee></span> */}
  {/* <Marquee velocity={150}>
        {info.map((headline) => (
          <div key={uuidv4()} style={{ padding: '0 10px' }}>
            {headline}
          </div>
        ))}
      </Marquee> */}
      </span>
  {/* </Marquee> */}
</h1>
      <div className="container mx-auto">
        <div className="flex flex-col items-center md:grid md:grid-cols-3 lg:grid-cols-4 gap-6  ">
          {news.map((article, index) => (
            <div key={index} className="max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 dark:text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                className="w-full h-40 object-cover"
                src={article.urlToImage || defaultImage}
                alt={article.title}
              />
              <div className="px-4 py-4">
              <div className="font-bold text-lg mb-2">
      {getFirstWords(article.title, 10)}
    </div>
                {/* <div className="font-bold text-lg mb-2">{article.title}</div> */}
                {/* <p className="text-gray-700 text-base line-clamp-3">
                  {article.description}
                </p> */}
              </div>
              <div className="px-4 pt-2 pb-2 text-center">
                <button
                  onClick={() => handleReadMore(article)}
                  className="inline-block bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-sm"
                >
                  Read Full Article
                </button>
              </div>
              
            </div>
            
            
          ))}
         
        </div>
      
      </div>
      <Carousel />
    </div>
   
    </>
  );
}

export default TrendingNews;
