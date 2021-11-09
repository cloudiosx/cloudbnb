import React from "react";
import "./SearchPage.css";
import "../Banner/Banner.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 August to 30 August · 2 Guests</p>
        <h1>Stays nearby</h1>
        <button type="button" className="button">
          <span>Cancellation Flexibility</span>
        </button>
        <button type="button" className="button">
          <span>Type of Place</span>
        </button>
        <button type="button" className="button">
          <span>Price</span>
        </button>
      </div>
    </div>
  );
}

export default SearchPage;
