import {
  ADD_TO_WATCHLATER,
  RMV_FROM_WATCHLATER,
} from "../constants/watchlater-constants";

export   const watchlaterInitialState = {
  watchlater: []
};

export const WatchlaterReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLATER:
      return { ...state, watchlater: action.payload };
    case RMV_FROM_WATCHLATER:
      return { ...state, watchlater: action.payload };
    default:
      return state;
  }
};
