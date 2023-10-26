import React, { useState, useEffect } from "react";
import * as api from "../api";

export default function VotingButton({ singleArticle }) {
  const [votes, setVotes] = useState(singleArticle.votes);
  const [error, setError] = useState(null);

  const handleVote = (value) => {
    setVotes(votes + value);
    api.patchArticlebyId(singleArticle.article_id, value).catch((error) => {
      setVotes(votes - value);
      console.error("Error:", error);
      setError("Failed to vote");
    });
  };

  return (
    <div className="voting-component">
      <button
        className="up-button"
        onClick={() => handleVote(+1)}
        disabled={votes === 1}
      >
        ✅
      </button>
      <span className="vote-count">{votes}</span>
      <button
        className="down-button"
        onClick={() => handleVote(-1)}
        disabled={votes == -1}
      >
        ❌
      </button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}
