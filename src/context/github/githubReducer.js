import {
  SEARCH_USERS,
  GET_USER,
  ClEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        // state is immutable, so you have to pull out
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
