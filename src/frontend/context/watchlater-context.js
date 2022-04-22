import { createContext, useContext ,useReducer} from "react";
import { WatchlaterReducer } from "../reducer/watchlater-reducer";

const WatchlaterContext = createContext();

const WatchlaterProvider = ({ children }) => {

  const initialState = {
    watchlater: []
  };
  

  const [watchlaterState,watchlaterDipatcher] = useReducer(WatchlaterReducer,initialState)

  return (
    <WatchlaterContext.Provider value={{ watchlaterState,watchlaterDipatcher }}>
      {children}
    </WatchlaterContext.Provider>
  );
};

const useWatchlater = () => {
  const context = useContext(WatchlaterContext);
  if (context !== undefined) {
    return context;
  }
};

export { useWatchlater, WatchlaterProvider };
