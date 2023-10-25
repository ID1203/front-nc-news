import React, { useEffect, useState } from "react";
import * as api from "../api";
import Comment from "./Comment";

export default function CommentSection({ singleArticle }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.getArticleCommentsById(singleArticle.article_id).then(({ data }) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [singleArticle.article_id]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <section>
      <div className="comment-container">
        {comments.map((comment) => {
          return <Comment key={comment.comment_id} comment={comment} />;
        })}
      </div>
    </section>
  );
}
