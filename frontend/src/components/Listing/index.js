import React from "react";
import "./Listing.css";

function Listing({ src, title, city, state, price }) {
  return (
    <ul className="listing-card">
      <img src={src} className="listing-image" alt=""></img>
      <li className="listing-detail">
        <h3 className="listing-detail" id="listing-title">
          {title}
        </h3>
        <h5 className="listing-detail" id="listing-price">
          ${price} / night
        </h5>
      </li>
    </ul>
  );
}

export default Listing;
