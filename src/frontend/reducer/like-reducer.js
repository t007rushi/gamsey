import { ADD_TO_LIKE, RMV_FROM_LIKE } from "../constants/like-constants";

export const likeInitialState = {
  likes: [],
};

export const LikeReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_LIKE:
      return { ...state, likes: action.payload };
    case RMV_FROM_LIKE:
      return { ...state, likes: action.payload };
    default:
      return state;
  }
};
