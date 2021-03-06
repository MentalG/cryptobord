import axios from "axios";

export default axios.create({ baseURL: "https://api.coingecko.com/api/v3" });

export const fetchAllCoins = async () => {
  let res;

  try {
    res = await fetch("https://api.coingecko.com/api/v3/coins/list");
  } catch (error) {
    console.log(error);
  }

  return res.json();
};
