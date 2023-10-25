import React, { useEffect, useState } from "react";
import * as api from "../api";
import Comment from "./Comment";

export default function CommentSection({ singleArticle }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.getArticleCommentsById(singleArticle.article_id).then(({ data }) => {
      setComments(data);
    });
  }, [singleArticle.article_id]);

  return (
    <section>
      <div className="comment-container">
        {comments &&
          comments.map((comment) => {
            return <Comment key={comment.comment_id} comment={comment} />;
          })}
      </div>
    </section>
  );
}
