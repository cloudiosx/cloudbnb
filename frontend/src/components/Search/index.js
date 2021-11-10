import React, { useEffect } from "react";
import "./SearchPage.css";
import "../Banner/Banner.css";
import SearchResult from "../SearchResult";
import { getHomes } from "../../store/homeReducer";
import { getImages } from "../../store/imageReducer";
import { useDispatch, useSelector } from "react-redux";

function SearchPage() {
  const dispatch = useDispatch();

  const homesObj = useSelector((state) => state.home);
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
      {homes.map((home) => (
        <SearchResult
          key={home.id}
          src={home.imageUrl}
          title={home.title}
          city={home.city}
          description={
            "1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen· Free parking · Washing Machine"
          }
          star={4.48}
          state={home.state}
          price={home.price}
          total={"$200 total"}
        />
      ))}
    </div>
  );
}

export default SearchPage;
