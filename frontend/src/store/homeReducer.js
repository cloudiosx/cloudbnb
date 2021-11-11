import { csrfFetch } from "./csrf";

const LOAD_HOMES = "home/LOADHOMES";
const CREATE_HOME = "home/CREATEHOME";
const EDIT_HOME = "home/EDITHOME";
const DELETE_HOME = "home/DELETEHOME";

export const loadHomes = (homes) => {
  return { type: LOAD_HOMES, homes };
};

export const createHome = (home) => {
  return { type: CREATE_HOME, home };
};

export const editHome = (home) => {
  return { type: EDIT_HOME, home };
};

export const deleteHome = (home) => {
  return { type: DELETE_HOME, home };
};

export const getHomes = () => async (dispatch) => {
  const response = await fetch("/api/homes");
  // console.log(response);
  const homes = await response.json();
  // console.log(articles);
  dispatch(loadHomes(homes));
  return homes;
};

export const createListing = (data) => async (dispatch) => {
  const response = await csrfFetch("/api/homes", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const home = await response.json();
  dispatch(createHome(home));
  return home;
};

export const editListing = (data, listingId) => async (dispatch) => {
  const response = await csrfFetch(`/api/homes/${listingId}/edit`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  if (response.ok) {
    dispatch(editHome(listingId));
  }
};

export const deleteListing = (listingId) => async (dispatch) => {
  const response = await csrfFetch(`/api/homes/${listingId}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(deleteHome(listingId));
  }
};

const initialState = {};

const homeReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_HOMES:
      // console.log(action);
      // Remember to create a new reference to the nested objects in your state
      newState = { ...state };
      action.homes.forEach((home) => {
        newState[home.id] = home;
      });
      return newState;
    // return { ...state, entries: [...action.articles] };
    case CREATE_HOME:
      // console.log(action);
      // Remember to create a new reference to the nested objects in your state
      newState = { ...state };
      // action.home.forEach((home) => {

      // });
      newState[action.home.id] = action.home;
      return newState;
    // return { ...state, entries: [...action.articles] };
    case EDIT_HOME:
      newState = { ...state, [action.home.id]: action.home };
      return newState;
    case DELETE_HOME:
      delete state[action.home];
      return { ...state };
    default:
      return state;
  }
};

export default homeReducer;
