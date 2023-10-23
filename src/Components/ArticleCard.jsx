import React from "react";

export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h5>{article.title}</h5>
      <p>{article.topic}</p>
      <img
        className="item-image"
        src={`${article.article_img_url}`}
        alt={`an image of a ${article.title}`}
      />
    </div>
  );
}
