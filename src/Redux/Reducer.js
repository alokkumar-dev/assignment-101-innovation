import { GET_DATA } from "./Actions";

const initalState = {
  data: [],
};

export const Reducer = (store = initalState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return { ...store, data: payload };
    default:
      return store;
  }
};
