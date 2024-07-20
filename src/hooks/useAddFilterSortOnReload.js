import { useEffect } from "react";
import {
  updateFilterBy,
  updateSortBy,
} from "../features/dashboard/dashboardSlice";
import { useReadFilterSortData } from "./useReadFilterSortData";
import { useDispatch } from "react-redux";

export function useAddFilterSortOnReload() {
  const dispatch = useDispatch();
  const data = useReadFilterSortData();

  const sortBy = data?.[0]?.sortBy;
  const filterBy = data?.[0]?.filterBy;

  useEffect(
    function () {
      if (!sortBy || !filterBy) return;
      dispatch(updateSortBy(sortBy));
      dispatch(updateFilterBy(filterBy));
    },
    [sortBy, filterBy, dispatch]
  );
}
