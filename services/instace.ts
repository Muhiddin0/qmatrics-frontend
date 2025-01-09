import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:8000/api/v1/"
      : "https://rakat-solutions-website-backend.6cpoqp.easypanel.host/api/v1/",
});

export default instance;
