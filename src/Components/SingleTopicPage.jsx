import React from "react";
import { v4 as uuidv4 } from "uuid";
import ArticleCard from "./ArticleCard";
import { Link, useLocation } from "react-router-dom";

export default function SingleTopicPage({ topic, allArticles }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sortBy = searchParams.get("sort_by") || "date";
  const order = searchParams.get("order") || "desc";

  const list = allArticles
    .filter((article) => article.topic === topic)
    .sort((a, b) => {
      if (sortBy === "date") {
        return order === "asc"
          ? new Date(a.created_at) - new Date(b.created_at)
          : new Date(b.created_at) - new Date(a.created_at);
      }
      if (sortBy === "comment_count") {
        return order === "asc"
          ? a.comment_count - b.comment_count
          : b.comment_count - a.comment_count;
      }
      if (sortBy === "votes") {
        return order === "asc" ? a.votes - b.votes : b.votes - a.votes;
      }
      return 0;
    });

  return (
    <section>
      <h1>{topic}</h1>
      <main className="main-container">
        {list.map((article) => {
          const uniqueId = uuidv4();
          return (
            <div className="artical-preview" key={uniqueId}>
              <Link className="link" to={`/articles/${article.article_id}`}>
                <ArticleCard article={article} />
              </Link>
            </div>
          );
        })}
      </main>
    </section>
  );
}
