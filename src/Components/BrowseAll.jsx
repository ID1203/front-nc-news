import React from "react";
import { useState, useEffect } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";

export default function BrowseAll() {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    api.getArticles().then((articles) => {
      console.log(articles);
      setAllArticles(articles);
    });
  }, []);

  return (
    <section>
      <h1>Borwse ALL</h1>
      <main className="card-container">
        {allArticles.map((article, index) => {
          return (
            <ArticleCard article={article} key={`${article.name}${index}`} />
          );
        })}
      </main>
    </section>
  );
}
