const LOAD_IMAGES = "home/LOAD_LISTINGS";

export const loadImages = (images) => {
  return { type: LOAD_IMAGES, images };
};

export const getImages = () => async (dispatch) => {
  const response = await fetch("/api/images");
  // console.log(response);
  const images = await response.json();
  dispatch(loadImages(images));
  return images;
};

const initialState = {};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGES:
      // console.log(action);
      // Remember to create a new reference to the nested objects in your state
      const newState = { ...state };
      action.images.forEach((image) => {
        newState[image.id] = image;
      });
      return newState;
    // return { ...state, entries: [...action.articles] };
    default:
      return state;
  }
};

export default imageReducer;
