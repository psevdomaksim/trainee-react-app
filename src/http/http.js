import axios from "axios";

const $host = axios.create({
  baseURL: "https://stage-5-2-server.vercel.app",
  withCredentials: true,
  //baseURL: "http://localhost:5000",
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};


$host.interceptors.request.use(authInterceptor);

export { $host };
