import React, { useState } from "react";
import "./Banner.css";
import DateFormModal from "../DateFormModal";
import { Modal } from "../../context/Modal";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      {showSearch && (
        <Modal onClose={() => setShowSearch(!showSearch)}>
          <DateFormModal />
        </Modal>
      )}
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>You don't have to go far to find a world of wonder</h5>
        <div className="buttons">
          <button
            type="button"
            className="banner__button1"
            onClick={() => history.push("/listings")}
          >
            <span>Explore</span>
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
