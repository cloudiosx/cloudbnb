const LOAD_HOMES = "home/LOADHOMES";

export const loadHomes = (homes) => {
  return { type: LOAD_HOMES, homes };
};

export const getHomes = () => async (dispatch) => {
  const response = await fetch("/api/homes");
  // console.log(response);
  const homes = await response.json();
  // console.log(articles);
  dispatch(loadHomes(homes));
  return homes;
};

const initialState = {};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOMES:
      // console.log(action);
      // Remember to create a new reference to the nested objects in your state
      const newState = { ...state };
      action.homes.forEach((home) => {
        newState[home.id] = home;
      });
      return newState;
    // return { ...state, entries: [...action.articles] };
    default:
      return state;
  }
};

export default homeReducer;
