import { SET_ALERT, REMOVE_ALERT } from "../types";

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;

    case REMOVE_ALERT:
      return null;

    // lines above returns {message: '請輸入內容', type: 'light'}
    // lines below returns {alert: {message: '請輸入內容', type: 'light'}

    // if use codes below, alert will be broken.
    // because message, type are wrapped inside another object called alert
    // case SET_ALERT:
    //   return {
    //     ...state,
    //     alert: action.payload,
    //   };
    // case REMOVE_ALERT:
    //   return {
    //     ...state,
    //     alert: null,
    //   };
    default:
      return state;
  }
};
