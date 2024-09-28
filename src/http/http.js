import axios from "axios";

const $host = axios.create({
   baseURL: "https://server-long-glitter-8298.fly.dev/",
 // baseURL: "http://localhost:5000",
});

export { $host };
