import { useReducer, createContext, useContext } from "react";
import { LikeReducer } from "../reducer/like-reducer";

const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const initialState = {
    likes: [],
  };
  const [likeState, likeDipatcher] = useReducer(
    LikeReducer,
    initialState
  );

  return (
    <LikeContext.Provider value={{ likeState, likeDipatcher }}>
      {children}
    </LikeContext.Provider>
  );
};

const useLike = () => {
  const context = useContext(LikeContext);
  if (context !== undefined) {
    return context;
  }
};

export { useLike, LikeProvider };
