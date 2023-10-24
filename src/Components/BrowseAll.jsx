import React from "react";
import { useState, useEffect } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function BrowseAll() {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    api.getArticles().then((articles) => {
      setAllArticles(articles);
    });
  }, []);

  return (
    <section>
      <h1>Borwse ALL</h1>
      <main className="card-container">
        {allArticles.map((article, index) => {
          const uniqueId = uuidv4();
          return <ArticleCard article={article} />;
        })}
      </main>
    </section>
  );
}
