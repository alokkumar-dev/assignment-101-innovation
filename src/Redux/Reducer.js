import { GET_DATA, GET_FAVOURATE } from "./Actions";

const initalState = {
  data: [],
  favourite: [],
};

export const Reducer = (store = initalState, { type, payload }) => {
  console.log("store", store);
  switch (type) {
    case GET_DATA:
      return { ...store, data: payload };
    case GET_FAVOURATE:
      return { ...store, favourite: [...store.favourite, payload] };
    default:
      return store;
  }
};
