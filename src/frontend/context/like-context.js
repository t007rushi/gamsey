import { useReducer, createContext, useContext } from "react";
import { likeInitialState, LikeReducer } from "../reducer/like-reducer";

const LikeContext = createContext();

const LikeProvider = ({ children }) => {
 
  const [likeState, likeDipatcher] = useReducer(
    LikeReducer,
    likeInitialState
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
