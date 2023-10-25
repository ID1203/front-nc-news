import React from "react";

export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <div className="article-card-content">
        <h1 className="article-title">{article.title}</h1>
        <p className="article-topic">{article.topic}</p>
        <img
          className="item-card-image"
          src={article.article_img_url}
          alt="Article Image"
        />
      </div>
    </div>
  );
}
