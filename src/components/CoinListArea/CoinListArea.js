import React, { useEffect, useState, useContext } from "react";
// import { useTransition, animated } from "react-spring";

import "./CoinListArea.scss";

import coinGecko from "../../api/coinGecko";
import { WatchListContext } from "../../context/WatchlistContext";
import CoinToast from "../UI/CoinToast";

export default function CoinListArea() {
  const [coins, setCoins] = useState([]);
  const { watchList, deleteCoin } = useContext(WatchListContext);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(response.data);
      setLoading(false);
    };
    watchList.length > 0 ? fetchData() : setCoins([]);
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) {
      return <div className="Loading">...</div>;
    }

    return coins.map((coin) => {
      return <CoinToast key={coin.id} coin={coin} close={deleteCoin} />;
    });
  };

  return <div className="coin-list-area">{renderCoins()}</div>;
}
