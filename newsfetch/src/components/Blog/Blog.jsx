import React, { useState } from 'react';

const Blog = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'First Article', content: 'This is the content of the first article.' },
    { id: 2, title: 'Second Article', content: 'This is the content of the second article.' },
    { id: 3, title: 'Third Article', content: 'This is the content of the third article.' },
  ]);

  const [newArticle, setNewArticle] = useState({ title: '', content: '' });

  const handleAddArticle = () => {
    if (newArticle.title && newArticle.content) {
      const id = articles.length ? articles[articles.length - 1].id + 1 : 1;
      setArticles([...articles, { id, ...newArticle }]);
      setNewArticle({ title: '', content: '' });
    }
  };

  const handleDeleteArticle = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div className="p-6">
      {/* Add New Article Section */}
      <section className="mb-6 bg-gray-50 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add a New Article</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={newArticle.title}
            onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            placeholder="Content"
            value={newArticle.content}
            onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
          <button
            onClick={handleAddArticle}
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
          >
            Add Article
          </button>
        </div>
      </section>

      {/* Article Grid */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Articles</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold">{article.title}</h3>
              <p className="text-gray-700 mt-2">{article.content}</p>
              <button
                onClick={() => handleDeleteArticle(article.id)}
                className="mt-4 px-3 py-1 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
