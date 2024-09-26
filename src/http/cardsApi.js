import { $host} from "./http";


export const fetchCards = async () => {
  const { data } = await $host.get("/cards");
  return data;
};

