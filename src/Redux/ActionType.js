import { GET_DATA, GET_FAVOURATE, GET_FILTER_DATA } from "./Actions";

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});
export const getFavourite = (payload) => ({
  type: GET_FAVOURATE,
  payload,
});
export const getFilterData = (payload) => ({
  type: GET_FILTER_DATA,
  payload,
});
