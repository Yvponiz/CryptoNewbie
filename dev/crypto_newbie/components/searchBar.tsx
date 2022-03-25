import { stringify } from "querystring";import React, { useState } from "react";

const [clickedButton, setClickedButton] = useState('');
const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  const button: HTMLButtonElement = event.currentTarget;
  setClickedButton(button.name);
  };

export default function SearchBar () {
  return(
    <div className="searchbar-section">
      <div className="searchbar">
        <input type="text" id="search" name="search" placeholder="Rechercher" />
      </div>
      <div className="button-search">
        <button onClick={this.buttonHandler}>Rechercher</button>
      </div>
    </div>
  )
}