import axios from "axios";

const request = axios.create({
  baseURL: "https://id1203.onrender.com/api/",
});

export const getArticles = () => {
  return request.get("articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export const getArticlesByID = (article_id) => {
  return request.get(`articles/${article_id}`).then(({ data }) => {
    return data[0];
  });
};

export const getArticleCommentsById = (article_id) => {
  return request.get(`articles/${article_id}/comments`).then((data) => {
    return data;
  });
};

export const patchArticlebyId = (article_id, value) => {
  return request
    .patch(`articles/${article_id}`, { incVote: value })
    .then(({ data: { votes } }) => {
      return votes;
    });
};

export const postComment = (article_id, commentData) => {
  console.log(commentData);
  return request
    .post(`articles/${article_id}/comments`, commentData)
    .then(({ data: { body } }) => {
      return body;
    });
};

export const getTopics = () => {
  return request.get("topics").then(({ data: { topics } }) => {
    return topics;
  });
};
