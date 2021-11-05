import { csrfFetch } from "./csrf";

const SET_USER = "session/setSessionUser";
const REMOVE_USER = "session/removeSessionUser";

export const setSessionUser = (newSession) => ({
  type: SET_USER,
  newSession,
});

export const removeSessionUser = (session) => {
  return { type: REMOVE_USER, session };
};

export const loginSetUser = (payload) => async (dispatch) => {
  const response = csrfFetch("/api/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  // console.log(response);
  const userResponse = await response.json();
  // console.log(articles);
  dispatch(setSessionUser(userResponse));
  return userResponse;
};

const userReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = {
        ...state,
        [action.newSession.id]: { id: action.newSession.id },
      };
      return newState;
    case REMOVE_USER:
      newState = { ...state };
      delete newState[action.newSession.id];
      return newState;
    default:
      return state;
  }
};

export default userReducer;
