import { GET_DATA, GET_FAVOURATE } from "./Actions";

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});
export const getFavourite = (payload) => ({
  type: GET_FAVOURATE,
  payload,
});
