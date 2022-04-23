import { createContext, useContext ,useReducer} from "react";
import { watchlaterInitialState, WatchlaterReducer } from "../reducer/watchlater-reducer";

const WatchlaterContext = createContext();

const WatchlaterProvider = ({ children }) => {


  

  const [watchlaterState,watchlaterDipatcher] = useReducer(WatchlaterReducer,watchlaterInitialState)

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
