import React, { useState, useEffect } from 'react';
import Article from './components/Article';
import './App.css';

const News = () => {
    const [articles, setArticles] = useState([]);

    // Fetch articles from API
    const fetchArticles = async () => {
        try {
            const response = await fetch('/api/news');
            const data = await response.json();
            setArticles(data.articles);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    // Use useEffect to call fetchArticles initially and then every 5 hours
    useEffect(() => {
        fetchArticles(); // fetch initially when the component is mounted.
        const intervalId = setInterval(fetchArticles, 5 * 60 * 60 * 1000); // fetch every 5 hours

        return () => clearInterval(intervalId); // clean up on unmount
    }, []);

    return (
        <div className="news-container">
            {articles.map((article, index) => (
                <Article key={index} article={article} />
            ))}
        </div>
    );
};

export default News;
