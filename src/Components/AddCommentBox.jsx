import { useState } from "react";
import * as api from "../api";

export default function AddCommentBox({
  singleArticle,
  comments,
  setComments,
}) {
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (comment.trim() === "") {
      setError("Comment cannot be empty.");
      return;
    }

    const newComment = {
      username: "jessjelly",
      body: comment,
      temporaryId: Date.now(),
      votes: 0,
    };

    setIsSubmitting(true);
    setComments((prevComments) => [newComment, ...prevComments]);
    setComment("");
    setError(null);

    api
      .postComment(singleArticle.article_id, newComment)
      .then((response) => {
        setSuccessMessage("Comment posted successfully!");
        setComment("");
      })
      .catch((error) => {
        setError("Failed to post comment. Please try again later.");
        setComments(
          comments.filter((c) => c.temporaryId !== newComment.temporaryId)
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment..."
          rows="4"
          cols="50"
        />
        <button type="submit" disabled={isSubmitting}>
          Submit Comment
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </div>
  );
}
