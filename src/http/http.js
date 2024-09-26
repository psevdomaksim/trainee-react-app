import axios from "axios";

const $host = axios.create({
  baseURL: "https://server-bitter-violet-9200.fly.dev/",
});

export { $host };
