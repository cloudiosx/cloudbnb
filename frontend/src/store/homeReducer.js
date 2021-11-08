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

const initialState = { entries: {}, isLoading: true, likes: 0 };

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOMES:
      // console.log(action);
      // Remember to create a new reference to the nested objects in your state
      const newState = { ...state, entries: { ...state.entries } };
      action.homes.forEach((home) => {
        newState.entries[home.id] = home;
      });
      return newState;
    // return { ...state, entries: [...action.articles] };
    default:
      return state;
  }
};

export default homeReducer;
