import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard(article) {
  return (
    <div className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <h5>{article.title}</h5>
      </Link>
      <p>{article.topic}</p>
      <img
        className="item-image"
        src={`${article.article_img_url}`}
        alt={`an image of a ${article.title}`}
      />
    </div>
  );
}
