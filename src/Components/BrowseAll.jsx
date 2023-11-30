import React from "react";
import { useState, useEffect } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function BrowseAll({ allArticles, setAllArticles }) {
  useEffect(() => {
    api.getArticles().then((articles) => {
      setAllArticles(articles);
    });
  }, []);

  return (
    <section>
      <h1>Browse</h1>
      <main className="main-container">
        {allArticles.map((article) => {
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
