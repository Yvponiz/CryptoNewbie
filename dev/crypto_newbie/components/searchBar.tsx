import { stringify } from "querystring";import React, { useState } from "react";
import { searchCrypto } from "../pages/api/coinGecko";

export default function SearchBar () {
  function searchAction(search:String){
    searchCrypto(search);
  }

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