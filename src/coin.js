import React from "react";
import "./coin.css";

const coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price"> &#8377; {price}</p>
          <p className="volume"> &#8377; {volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green"> {priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap : &#8377; {marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default coin;