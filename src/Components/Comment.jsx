import React, { useState } from "react";

export default function Comment({ comment }) {
  const { author, body, created_at, votes } = comment;
  return (
    <div className="comment">
      <div className="comment-header">
        <span className="comment-author">{author}</span>
        <span className="comment-date">
          {new Date(created_at).toLocaleString()}
        </span>
      </div>
      <p className="comment-body">{body}</p>
      <div className="comment-footer">
        <span className="comment-votes">{votes} votes</span>
      </div>
    </div>
  );
}
