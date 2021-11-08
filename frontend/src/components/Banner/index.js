import React, { useState } from "react";
import "./Banner.css";
import DateFormModal from "../DateFormModal";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      {showSearch && <DateFormModal />}
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you
        </h5>
        <div className="buttons">
          <button type="button" className="banner__button1">
            <span>Explore Nearby</span>
          </button>
          <button
            type="button"
            className="banner__button2"
            onClick={() => setShowSearch(!showSearch)}
          >
            <span>Search Dates</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
