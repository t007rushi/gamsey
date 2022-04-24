import { ADD_TO_HISTORY, CLEAR_HISTORY, RMV_FROM_HISTORY } from "../constants/history-constants";

export const historyInitialState = {
  history: [],
};

export const HistoryReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return { ...state, history: action.payload };
    case RMV_FROM_HISTORY:
      return { ...state, history: action.payload };
      case CLEAR_HISTORY:
        return { ...state, history: [] };
    default:
      return state;
  }
};