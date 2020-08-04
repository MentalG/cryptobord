import React, { useState, useEffect } from 'react';
import { fetchAllCoins } from '../../../api/coinGecko';
import './SearchBar.scss';

export default function SearchBar() {
  const [allCoins, setAllCoins] = useState([]);
  const [sortedCoins, setSortedCoins] = useState([]);

  const fetchCoins = async () => {
    const response = await fetchAllCoins();
    setAllCoins(response);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const handleInputChange = (value) => {
    if (value.length >= 2) {
      const result = allCoins.filter((coin) => {
        return coin.symbol.indexOf(value) >= 0
      });

      setSortedCoins(result);
    } else {
      setSortedCoins([]);
    }
  };

  return (
    <div className='search-bar'>
      <div className='outer'>
        <div className='inner'>
          <input
            className='input'
            placeholder='Search to add'
            onChange={(e) => {
              handleInputChange(e.target.value);
            }}
          />
          <ul style={{ listStyle: 'none' }}>
            {sortedCoins?.map((item, index) => {
              return <li key={index}>{item.name}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
