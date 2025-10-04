import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api", // Node.js backend
});

export const searchBooks = async (query, category, author) => {
  const response = await API.post("/search", { query, category, author });
  return response.data;
};
