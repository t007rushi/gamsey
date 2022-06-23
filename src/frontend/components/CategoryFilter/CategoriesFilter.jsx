import React from "react";
import { categoryFilterData } from "../../constants/data/categoryFilterData";
import { useFilter } from "../../context/filter-context";
import "./category.css";

export const CategoriesFilter = () => {
  const { filterstate, dispatcherforfilter } = useFilter();
  return (
    <div className="flex-row category-conatiner gap-4 mb-2 ml-4 py-4 overflow-x-scroll webkit">
      {categoryFilterData?.map((category) => {
        return (
          <label
            key={category.id}
            className={
              category.category === filterstate.filterby
                ? "label matched-style py-2 h-10 w-40 px-3 whitespace-nowrap text-sm font-medium rounded-full border border-gray-200 text-white bg-black z-10"
                : "label unmatched-style py-2 h-10 w-40 px-3 whitespace-nowrap text-sm font-medium rounded-full border border-gray-200 text-gray-900 bg-white  hover:bg-gray-100 hover:text-blue-700"
            }
            htmlFor={category.category}
          >
            <input
              className="opacity-0"
              type="radio"
              name="categories"
              id={category.category}
              checked={category && category.category === filterstate.filterby}
              onChange={(e) =>
                dispatcherforfilter({ type: "FILTERBY", payload: e.target.id })
              }
            />
            {category.categoryName}
          </label>
        );
      })}
    </div>
  );
};
