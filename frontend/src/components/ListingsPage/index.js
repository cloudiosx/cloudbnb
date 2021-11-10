import React, { useEffect } from "react";
import "./ListingsPage.css";
import Listing from "../Listing";
import { useDispatch, useSelector } from "react-redux";
import { getHomes } from "../../store/homeReducer";
import { useHistory } from "react-router-dom";

function ListingsPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const homesObj = useSelector((state) => state.home);
  const homes = Object.values(homesObj);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getHomes());
  }, [dispatch]);

  return (
    <>
      <div className="listingPage__header__info">
        <div className="listings__header__buttons">
          <div className="filter__buttons">
            <button type="button" className="button">
              <span>Offbeat</span>
            </button>
            <button type="button" className="button">
              <span>Luxe</span>
            </button>
            <button type="button" className="button">
              <span>Off-the-grid</span>
            </button>
            <button type="button" className="button">
              <span>A-frames</span>
            </button>
            <button type="button" className="button">
              <span>Beachfront</span>
            </button>
          </div>
          <div className="create__listing">
            <button
              type="button"
              className="button"
              onClick={() =>
                sessionUser ? history.push("/createListing") : history.push("/")
              }
            >
              <span>Create listing</span>
            </button>
          </div>
        </div>
      </div>
      <div className="listings">
        {homes.map((home) => (
          <Listing
            key={home.id}
            id={home.id}
            src={home.imageUrl}
            title={home.title}
            city={home.city}
            state={home.state}
            price={home.price}
          />
        ))}
      </div>
    </>
  );
}

export default ListingsPage;
