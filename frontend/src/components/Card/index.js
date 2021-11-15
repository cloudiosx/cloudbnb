import React from "react";
import "./Card.css";

function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <p className="card__title">{title}</p>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
