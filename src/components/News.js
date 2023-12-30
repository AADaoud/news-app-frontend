import React from 'react';
import Article from './Article';
import '../App.css'; 
import newsData from '../data/current-news.json'; 

const News = () => {
  const { articles } = newsData; 

  const categories = articles.reduce((acc, curr) => {
    const { category = "Uncategorized" } = curr; 
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(curr);
    return acc;
  }, {});

  return (
    <div className="news-container">
      {Object.entries(categories).map(([category, articles]) => (
        <div key={category}>
          <h1>{category}</h1>
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default News;
