import React from "react";
import "./SearchResult.css";

function SearchResult({ src, title, description, price }) {
  return (
    <div className="searchResult">
      <img src={src} alt="" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <h3>{title}</h3>
          <p>_____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__price">
            <h2>${price}/ night</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
