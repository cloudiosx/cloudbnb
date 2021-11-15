import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = "home/LOAD_REVIEWS";
const CREATE_REVIEW = "home/CREATE_REVIEW";
const EDIT_REVIEW = "home/EDIT_REVIEW";
const DELETE_REVIEW = "home/DELETE_REVIEW";

export const loadReviews = (reviews) => {
  return { type: LOAD_REVIEWS, reviews };
};

export const createReview = (review) => {
  return { type: CREATE_REVIEW, review };
};

export const editReview = (review) => {
  return { type: EDIT_REVIEW, review };
};

export const deleteReview = (review) => {
  return { type: DELETE_REVIEW, review };
};

export const getReviews = () => async (dispatch) => {
  const response = await fetch("/api/reviews");
  // console.log(response);
  const reviews = await response.json();
  dispatch(loadReviews(reviews));
  return reviews;
};

export const createListingReview = (data) => async (dispatch) => {
  const response = await csrfFetch("/api/reviews", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const review = await response.json();
  dispatch(createReview(review));
  return review;
};

export const editListingReview = (data, reviewId) => async (dispatch) => {
  console.log("----------------------");
  const response = await csrfFetch(`/api/reviews/${reviewId}/edit`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  console.log("----------------------");
  const updatedReview = await response.json();
  dispatch(editReview(updatedReview));
  return updatedReview;
};

export const deleteListingReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteReview(reviewId));
  }
};

const initialState = {};

const reviewReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_REVIEWS:
      // console.log(action);
      // Remember to create a new reference to the nested objects in your state
      newState = { ...state };
      action.reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    // return { ...state, entries: [...action.articles] };
    case CREATE_REVIEW:
      newState = { ...state };
      newState[action.review.id] = action.review;
      return newState;
    case EDIT_REVIEW:
      newState = { ...state };
      newState[action.review.id] = action.review;
      return newState;
    case DELETE_REVIEW:
      delete state[action.review];
      return { ...state };
    default:
      return state;
  }
};

export default reviewReducer;
