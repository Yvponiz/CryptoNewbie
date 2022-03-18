import React, { useState, useEffect } from 'react';
import axios from 'axios';
import crypto from 'crypto';

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


  return(
    <div className='cryptos-section'>
      <div className='crypto-column'>
        <p className='crypto-rang'>{crypto.rank}</p>
        <p className='crypto-nom'>{crypto.name}</p>
        <p className='crypto-symbol'>{crypto.id}</p>
        <p className='crypto-prix'>{crypto.price}</p>
        <p className='crypto-marketCap'>{crypto.market_cap}</p>
      </div>
    </div>
  )
}


export default CallCrypto;