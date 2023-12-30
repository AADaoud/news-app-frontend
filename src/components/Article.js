import React from 'react';
import '../App.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Article = ({ article }) => {
  const countryCode = article.country ? article.country.toLowerCase() : 'unknown';

  return (
    <div className="article-widget">
      <img src={article.urlToImage || "https://via.placeholder.com/300x150"} alt={article.title} className="article-image"/>
      <h2 className="article-title">{article.title}</h2>
      <p className="article-description">{article.description}</p>
      <div className="article-footer">
        <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
        <span className={`fi fi-${countryCode}`}></span>
      </div>
    </div>
  );
};

export default Article;
