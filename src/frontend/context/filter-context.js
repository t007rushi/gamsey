import { createContext, useReducer, useContext } from "react";
import { FilterReducerFun, initialState } from "../reducer/filter-reducer";

const FilterContext = createContext(null);

const FilterContextProvider = ({ children }) => {
  const [filterstate, dispatcherforfilter] = useReducer(
    FilterReducerFun,
    initialState
  );

  return (
    <FilterContext.Provider value={{ filterstate, dispatcherforfilter }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterContextProvider, useFilter };
