import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CoinDetailsPage.scss";
import HistoryChart from "../../components/HistoryChart";
import CoinData from "../../components/CoinData";
import coinGecko from "../../api/coinGecko";

export default function CoinDetailPage() {
  const { id } = useParams();
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await coinGecko.get(`/coins/${id}/market_chart`, {
        params: {
          vs_currency: "usd",
          days: "1",
        },
      });
      setCoinData(results.data.prices);
    };
    fetchData();
  }, [id]);

  const renderData = () => {
    return (
      <div className="coin-details-page">
        <div className="container">
          <div className="header"></div>
          <div className="chart">
            <HistoryChart />
          </div>
          <div className="bottom">
            {console.log(coinData)}
            <CoinData />
          </div>
        </div>
      </div>
    );
  };

  return renderData();
}
