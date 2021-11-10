import React from "react";
import "./Listing.css";
import { Link } from "react-router-dom";

function Listing({ id, src, title, city, state, price }) {
  return (
    <ul className="listing-card">
      <Link to={`/listings/${id}`}>
        <img src={src} className="listing-image" alt=""></img>
        <li className="listing-detail">
          <h3 className="listing-detail" id="listing-title">
            {title}
          </h3>
          <h5 className="listing-detail" id="listing-price">
            ${price} / night
          </h5>
        </li>
      </Link>
    </ul>
  );
}

export default Listing;
