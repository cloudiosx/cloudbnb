const LOAD_IMAGES = "image/LOADIMAGES";

export const loadImages = (images) => {
  return { type: LOAD_IMAGES, images };
};

export const getImages = () => async (dispatch) => {
  const response = await fetch("/api/images");
  // console.log(response);
  const images = await response.json();
  // console.log(articles);
  dispatch(loadImages(images));
  return images;
};

const initialState = { entries: {}, isLoading: true, likes: 0 };

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGES:
      // console.log(action);
      // Remember to create a new reference to the nested objects in your state
      const newState = { ...state, entries: { ...state.entries } };
      action.images.forEach((image) => {
        newState.entries[image.id] = image;
      });
      return newState;
    // return { ...state, entries: [...action.articles] };
    default:
      return state;
  }
};

export default imageReducer;
