import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make sure your data fetching logic works correctly
    fetchArticles()
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch articles:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  // Add some debugging to see what's happening
  console.log("Articles state:", articles, loading, error);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>Error loading articles: {error.message}</p>;
  if (articles.length === 0) return <p>No articles found.</p>;

  return (
    <div className="articles-list">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticlesList; 