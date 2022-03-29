import { stringify } from "querystring";import React, { useState } from "react";
import { searchCrypto } from "../pages/api/coinGecko";

export default function SearchBar () {
  const searchAction = () => {
    let inputValue = (document.getElementById('search') as HTMLInputElement).value;
    searchCrypto(inputValue);
  };

  return(
    <div className="searchbar-section">
      <div className="searchbar">
        <input type="text" id="search" name="search" placeholder="Rechercher" />
      </div>
      <div className="button-search">
        <button onClick={searchAction}>Rechercher</button>
      </div>
    </div>
  )
  }