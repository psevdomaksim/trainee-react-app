import { $host} from "./http";


export const fetchCards = async (searchValue) => {
  const { data } = await $host.get("api/card", {
    params: {
      searchValue: searchValue,
    },
  });
  return data;
};
