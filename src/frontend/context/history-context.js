import { useReducer, createContext, useContext } from "react";
import { historyInitialState, HistoryReducer } from "../reducer/history-reducer";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
 
  const [historyState, historyDipatcher] = useReducer(
    HistoryReducer,
    historyInitialState
  );

  return (
    <HistoryContext.Provider value={{ historyState, historyDipatcher }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => {
  const context = useContext(HistoryContext);
  if (context !== undefined) {
    return context;
  }
};

export { useHistory, HistoryProvider };