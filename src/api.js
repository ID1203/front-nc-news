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
