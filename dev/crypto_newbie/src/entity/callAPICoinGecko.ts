import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CallCrypto() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(response => {
        setCryptos(response.data);
      })
  }, []);
}

export default CallCrypto;