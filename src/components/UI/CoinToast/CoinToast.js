import React from "react";
import "./CoinToast.scss";
import { Link } from "react-router-dom";
import { GoX } from "react-icons/go";

export default function CoinToast({ coin, close }) {
  const priceDifferenceP = coin.price_change_percentage_24h;

  const priceDifferencePClass = `price-difference value${
    priceDifferenceP < 0 ? "--decreased" : "--increased"
  }`;

  const handleClose = () => {
    console.log("Tryna close!");
  };

  return (
    <Link to={`/coins/${coin.id}`} className="coin-toast">
      <div className="close">
        <div
          className="close-button"
          onClick={(e) => {
            //TODO: PREVENT FROM CHANGING THE PAGE INSTEAD OF CLOSING
            e.preventDefault();
            close(coin.id);
          }}
        >
          <GoX />
        </div>
      </div>
      <div className="container">
        <div className="top-row">
          <div className="name">{coin.id}</div>
          <div className="price">{coin.current_price}</div>
          <div className="price-difference">
            <div className={priceDifferencePClass}>{priceDifferenceP}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
