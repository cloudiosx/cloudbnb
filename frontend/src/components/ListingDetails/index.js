import React, { useEffect } from "react";
import * as sessionActions from "../../store/session";
import "./ListingDetails.css";
import { useParams } from "react-router";
import { getHomes } from "../../store/homeReducer";
import { getImages } from "../../store/imageReducer";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteListing } from "../../store/homeReducer";

function ListingDetails() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { listingId } = useParams();
  const homeObj = useSelector((state) => state.home);
  const specificHome = homeObj[listingId];

  const imageObj = useSelector((state) => state.image);
  const imageArray = Object.values(imageObj);
  const currentImages = imageArray.filter(
    (image) => image.homeId === +listingId
  );

  const sessionUser = useSelector((state) => state.session.user);
  console.log("session user", sessionUser);
  console.log("specific home", specificHome);

  const handleDelete = (listingId) => {
    dispatch(deleteListing(listingId));
    history.push("/listings");
  };

  useEffect(() => {
    dispatch(getHomes());
    dispatch(getImages());
    dispatch(sessionActions.retrieveUser());
  }, [dispatch]);

  return (
    <>
      {sessionUser?.id === specificHome?.userId && (
        <button
          type="button"
          className="button"
          onClick={() => handleDelete(listingId)}
        >
          <span>Delete</span>
        </button>
      )}
      <div id="listing-detail-component-container">
        <div id="listing-detail">
          <ul id="listing-detail-images">
            <li id="mainImage">
              <p className="listing-name">{specificHome?.name}</p>
              <img
                src={specificHome?.imageUrl}
                id="listing-detail-image"
                alt=""
              ></img>
            </li>
            <li id="otherImages">
              {currentImages.map((image, index) => {
                return (
                  <img
                    className="listing-detail-images"
                    key={index}
                    src={image.url}
                    alt=""
                  ></img>
                );
              })}
            </li>
          </ul>
          <div id="listing-details-container">
            <div id="listing-details">
              <h2 id="listing-detail-address">{specificHome?.address}</h2>
              <h2 id="listing-detail-city">
                {specificHome?.city}, {specificHome?.state}
              </h2>
              <h2 id="listing-detail-country">{specificHome?.country}</h2>
            </div>
            <div id="listing-price">
              <h2 id="listing-detail-price">{specificHome?.price}/night</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListingDetails;
