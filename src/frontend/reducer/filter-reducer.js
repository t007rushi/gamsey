export const initialState = {
  filterby: "all",
  search: "",
};

export const FilterReducerFun = (state, { type, payload }) => {
  switch (type) {
    // Filtering
    case "FILTERBY":
      return {
        ...state,
        filterby: payload,
      };
    //Search
    case "SEARCH":
      return { ...state, search: payload };
    //clean_up
    case "CLEAR_FILTERS":
      return {
        filterby: "all",
        search: "",
      };
    default:
      return state;
  }
};
