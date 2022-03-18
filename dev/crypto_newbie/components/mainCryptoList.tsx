import React, { useState, useEffect } from 'react';
import axios from 'axios';
import crypto from 'crypto';

function CallCrypto() {
  const [cryptos, setCryptos] = useState([]);
  const [recherche, setRecherche] = useState('');

  useEffect(() => {
    axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(response => {
        setCryptos(response.data);
      })
  }, []);

/*
  return(
    <div className='cryptos-section'>
      <Crypto
        nom={crypto.name}
        symbol={crypto.id}
        prix={crypto.price}
        marketCap={crypto.market_cap}
      />
    </div>
  )
  */
}


export default CallCrypto;