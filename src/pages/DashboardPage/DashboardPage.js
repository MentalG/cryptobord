import React from "react";
// import styles from "./DashboardPage.scss";
import AddCoinArea from "../../components/AddCoinArea";
import CoinListArea from "../../components/CoinListArea";

export default function DashboardPage() {
  return (
    <div className="dashboard-page">
      <AddCoinArea />
      <CoinListArea />
    </div>
  );
}
