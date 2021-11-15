import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import "./ListingDetails.css";
import { useParams } from "react-router";
import { getHomes } from "../../store/homeReducer";
import { getImages } from "../../store/imageReducer";
import { Modal } from "../../context/Modal";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteListing } from "../../store/homeReducer";
import { getReviews } from "../../store/reviewReducer";
import { deleteListingReview } from "../../store/reviewReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateReview from "../CreateReview";

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

  const reviewObj = useSelector((state) => state.review);
  const reviewArray = Object.values(reviewObj);
  const userReview = reviewArray.filter(
    (review) => review.homeId === +listingId
  );

  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleDeleteListing = async (listingId) => {
    await dispatch(deleteListing(listingId));
    history.push("/listings");
  };

  const handleDeleteReview = async (reviewId) => {
    await dispatch(deleteListingReview(reviewId));
    history.push(`/listings/${listingId}`);
  };

  useEffect(() => {
    dispatch(getHomes());
    dispatch(getImages());
    dispatch(getReviews());
    dispatch(sessionActions.retrieveUser());
  }, [dispatch]);

  return (
    <div className="container">
      {sessionUser?.id === specificHome?.userId && (
        <button
          type="button"
          className="button"
          onClick={() => handleDeleteListing(listingId)}
        >
          <span>Delete</span>
        </button>
      )}
      {sessionUser?.id === specificHome?.userId && (
        <button
          type="button"
          className="button"
          onClick={() => history.push(`/listings/${listingId}/edit`)}
        >
          <span>Edit</span>
        </button>
      )}
      <div id="listing-detail-component-container">
        <div id="listing-detail">
          <div id="listing-detail-images">
            <div id="mainImage">
              <p className="listing-name">{specificHome?.title}</p>
              <div className="listing-name-subtext-review">
                <FontAwesomeIcon icon={["far", "star"]} />
                <p className="listing-name-subtext-review-detailA">4.67</p>
                <p className="listing-name-subtext-review-detailB">
                  (15 reviews) · {specificHome?.city}, {specificHome?.state},{" "}
                  {specificHome?.country}
                </p>
              </div>
              <img
                src={specificHome?.imageUrl}
                id="listing-detail-image"
                alt=""
              ></img>
              <div id="listing-details-boxA">
                <p id="listing-detail-name">{specificHome?.name}</p>
                <p id="listing-detail-description">
                  {specificHome?.description}
                </p>
              </div>
              <div id="listing-details-boxB">
                <FontAwesomeIcon className="homeIcon" icon={["fal", "home"]} />
                <div className="listing-details-boxB-content">
                  <p id="listing-detail-boxB-name">Entire home</p>
                  <p id="listing-detail-boxB-description">
                    You'll have the cottage to yourself
                  </p>
                </div>
              </div>
              <div id="listing-details-boxC">
                <FontAwesomeIcon className="homeIcon" icon={["fal", "home"]} />
                <div className="listing-details-boxB-content">
                  <p id="listing-detail-boxB-name">Entire home</p>
                  <p id="listing-detail-boxB-description">
                    You'll have the cottage to yourself
                  </p>
                </div>
              </div>
              <div id="listing-details-boxD">
                <div className="description">{specificHome?.description}</div>
              </div>
            </div>
            {/* <li id="otherImages">
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
            </li> */}
          </div>
          {/* <div id="listing-details-container">
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
          </div> */}
          <div id="review-container">
            {userReview.map((review, index) => {
              console.log("----------------------------", index, review);
              return (
                <div key={index}>
                  {sessionUser?.id === review?.userId &&
                    (console.log("hi a", sessionUser?.id === review?.userId),
                    (
                      <button
                        type="button"
                        className="button"
                        onClick={() => handleDeleteReview(review?.id)}
                      >
                        <span>Delete</span>
                      </button>
                    ))}
                  {sessionUser?.id === review?.userId &&
                    (console.log("hi b", sessionUser?.id === review?.userId),
                    (
                      <button
                        type="button"
                        className="button"
                        onClick={() =>
                          history.push(
                            `/listings/${listingId}/${review?.id}/edit`
                          )
                        }
                      >
                        <span>Edit</span>
                      </button>
                    ))}
                  <h1 id="review-title">{review.title}</h1>
                  <p id="review-body">{review.review}</p>
                </div>
              );
            })}
            <button
              type="button"
              className="button"
              onClick={() =>
                sessionUser ? setShowReviewModal(true) : history.push("/")
              }
            >
              <span>Create review</span>
            </button>
            {showReviewModal && (
              <Modal onClose={() => setShowReviewModal(false)}>
                <CreateReview onClose={() => setShowReviewModal(false)} />
              </Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingDetails;
