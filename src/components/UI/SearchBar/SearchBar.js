import React, { useState, useEffect } from "react";
import coinGecko, { fetchAllCoins } from "../../../api/coinGecko";
import "./SearchBar.scss";

export default function SearchBar() {
  const [input, setInput] = useState(null);
  const [aCoins, setACoins] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const fetchCoins = async () => {
    const response = await fetchAllCoins();
    setACoins(response);
    console.log(response);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const renderSuggestions = () => {
    if (suggestions != []) {
      return suggestions.map((x, i) => {
        return <ul key={i}>{x.name}</ul>;
      });
    }
  };

  const filterSuggestions = () => {
    let filtered = aCoins.filter((coin) => {
      return coin.name.startsWith(input);
    });
    setSuggestions(filtered);
  };

  const handleInputChange = (i) => {
    setInput(i);
    filterSuggestions();
  };

  // const filteredSuggestions = aCoins.filter((coin) => {
  //   return Object.keys(coin).some((k) =>
  //     coin[k].toLowerCase().includes(input.toLowerCase())
  //   );
  // });

  return (
    <div className="search-bar">
      <div className="outer">
        <div className="inner">
          <input
            className="input"
            placeholder="Search to add"
            onChange={(e) => {
              handleInputChange(e.target.value);
            }}
          />
          {renderSuggestions()}
        </div>
      </div>
    </div>
  );
}
