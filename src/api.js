import axios from "axios";

const request = axios.create({
  baseURL: "https://id1203.onrender.com/api",
});

export const getArticles = () => {
  return request.get("articles").then(({ data: { articles } }) => {
    return articles;
  });
};
