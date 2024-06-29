import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TrendingNews() {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  const defaultImage = 'https://via.placeholder.com/300x200?text=No+Image';

  useEffect(() => {
    // https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=74816c3690434f50b56a475c71cd3b56
    axios.get(`/api/news`)
      .then(response => {
        // console.log(response.data);
        const filteredNews = response.data.articles.filter(article => article.source.id === 'the-times-of-india' ||  'google-news');
        setNews(filteredNews.slice(0, 10));
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
    <div className="p-5 bg-gray-200 text-center text-5xl mx-auto flex flex-col items-center">
      <h1 className="text-white mb-8 bg-green-900 rounded-xl p-4">Top 10 Business News from India</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <div key={index} className="max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white">
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
    </div>
  );
}

export default TrendingNews;
