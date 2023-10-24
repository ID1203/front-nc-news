import { useEffect, useState } from "react";
import * as api from "../api";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";

export default function SingleArtical() {
  const [singleArticle, setSingleArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.getArticlesByID(article_id).then((article) => {
      console.log(article), "<<<<<article";
      setSingleArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  console.log(singleArticle);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <section className="article-page">
      <h1>Success page</h1>
      <ArticleCard singleArticle={singleArticle} />
    </section>
  );
}
