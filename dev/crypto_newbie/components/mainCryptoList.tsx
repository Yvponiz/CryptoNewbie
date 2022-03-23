import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Crypto } from '../src/classes/Crypto';

function CallCrypto() {
  const [crypto, setCryptos] = useState([]);

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
      <p className='crypto-rang'>{Crypto.rank}</p>
      <p className='crypto-nom'>{Crypto.name}</p>
      <p className='crypto-symbol'>{Crypto.id}</p>
      <p className='crypto-prix'>{Crypto.price}</p>
      <p className='crypto-marketCap'>{Crypto.market_cap}</p>
    </div>
  </div>
)
}

 


export default CallCrypto;