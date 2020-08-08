import axios from "axios";

const api = axios.create({
  baseURL:
    "https://proffy-server-nlw2.herokuapp.com" || "http://localhost:3333",
});

export default api;
