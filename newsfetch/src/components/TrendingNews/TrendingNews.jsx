import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Carousel from '../Slider/Carousel';
import ClipLoader from 'react-spinners/ClipLoader'; // Import ClipLoader from react-spinners

function TrendingNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();
  const defaultImage = 'https://yt3.googleusercontent.com/VbGkSvLpAmSOVxSQ-42YlR4uQjaRbADrBZ0Jbm8rpeI7RiFSEp2_8DJqzgqH4dWViwYOQy2QJnQ=s900-c-k-c0x00ffffff-no-rj';

  useEffect(() => {
    setLoading(true); // Start loading
    axios.get('https://backendserver-production-85aa.up.railway.app/api/news')
      .then(response => {
        const filteredNews = response.data.articles.filter(article => article.source.name === 'The Times of India' || 'google-news');
        setNews(filteredNews.slice(0, 20));
        setLoading(false); // Stop loading after data is fetched
      })
      .catch(error => {
        console.error('Error fetching the news', error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  const handleReadMore = (article) => {
    navigate('/newsdetail', { state: { article } });
  };

  const getFirstWords = (text, wordCount) => {
    return text.split(" ").slice(0, wordCount).join(" ");
  };

  return (
    <>
      <div className="p-5 bg-gray-200 text-center text-5xl mx-auto flex flex-col items-center">
        <h1 className="relative text-black mb-8 shadow-lg rounded-lg p-1 overflow-hidden">
          <span className="absolute inset-0 bg-red-600 dark:bg-blue-600 animate-pulse opacity-75 rounded-lg"></span>
          <span className="relative">TOP BUSINESS HEADLINES</span>
        </h1>
        <div className="container mx-auto">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              {/* Use the ClipLoader spinner while loading */}
              <ClipLoader color="#e74c3c" size={50} /> {/* You can change size/color as needed */}
            </div>
          ) : (
            <div className="flex flex-col items-center md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          )}
        </div>
        {!loading && <Carousel />} 
      </div>
    </>
  );
}

export default TrendingNews;
