import React from "react";
import "./SearchResult.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchResult({ city, src, title, description, star, price, total }) {
  return (
    <div className="searchResult">
      <img src={src} alt="" />

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <div className="searchResult__infoTopColumn">
            <p>{`Private room in ${city}`}</p>
            <FontAwesomeIcon
              icon={["far", "heart"]}
              className="searchResult__heart"
            />
          </div>

          <h3>{title}</h3>
          <p>_____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <FontAwesomeIcon
              icon={["far", "star"]}
              className="searchResult__star"
            />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult__price">
            <h2>${price}/ night</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
