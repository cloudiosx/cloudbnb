import React, { useEffect } from "react";
import "./SearchPage.css";
import "../Banner/Banner.css";
import SearchResult from "../SearchResult";
import { getHomes } from "../../store/homeReducer";
import { getImages } from "../../store/imageReducer";
import { useDispatch, useSelector } from "react-redux";

function SearchPage() {
  const dispatch = useDispatch();

  const homesObj = useSelector((state) => state.home.entries);
  const homes = Object.values(homesObj);

  const imagesObj = useSelector((state) => state.image.entries);
  const images = Object.values(imagesObj);

  useEffect(() => {
    dispatch(getHomes());
    dispatch(getImages());
  }, [dispatch]);

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
      <SearchResult
        src={images[0]?.url}
        title={homes[0]?.title}
        description={homes[0]?.description}
        price={homes[0]?.price}
      />
      <SearchResult
        src={images[1]?.url}
        title={homes[1]?.title}
        description={homes[1]?.description}
        price={homes[1]?.price}
      />
    </div>
  );
}

export default SearchPage;
