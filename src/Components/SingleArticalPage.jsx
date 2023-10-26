import { useEffect, useState } from "react";
import * as api from "../api";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import VotingButton from "./VotingButton";

export default function SingleArtical() {
  const [singleArticle, setSingleArticle] = useState([]);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.getArticlesByID(article_id).then((article) => {
      setSingleArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <div className="article-page">
      <div className="article-page-content">
        <h1 className="article-title">{singleArticle.title}</h1>
        <p className="article-topic">{singleArticle.topic}</p>
        <img
          className="item-page-image"
          src={singleArticle.article_img_url}
          alt="Article Image"
        />
        <p className="article-text">{singleArticle.body}</p>
        <VotingButton singleArticle={singleArticle} />
        <CommentSection singleArticle={singleArticle} />
      </div>
    </div>
  );
}
