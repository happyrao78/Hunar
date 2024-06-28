import React from 'react';
import { useLocation } from 'react-router-dom';

function NewsDetail() {
  const location = useLocation();
  const { article } = location.state || {};

  return (
    <div className="p-5 bg-green-100 text-center text-5xl mx-auto flex flex-col items-center">
      {article ? (
        <div className="max-w-3xl rounded-2xl overflow-hidden shadow-lg bg-white p-6">
          <img
            className="w-full h-64 object-cover mb-4"
            src={article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image'}
            alt={article.title}
          />
          <h1 className="font-bold text-3xl mb-4">{article.title}</h1>
          <p className="text-gray-700 text-base">{article.description}</p>
        </div>
      ) : (
        <p>No article to display</p>
      )}
    </div>
  );
}

export default NewsDetail;
