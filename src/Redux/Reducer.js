import { GET_DATA, GET_FAVOURATE, GET_FILTER_DATA } from "./Actions";

const initalState = {
  data: [],
  favourite: [],
  filterData: [],
};

export const Reducer = (store = initalState, { type, payload }) => {
  console.log("store", store);
  switch (type) {
    case GET_DATA:
      return { ...store, data: payload, filterData: payload };
    case GET_FAVOURATE:
      return { ...store, favourite: [...store.favourite, payload] };
    case GET_FILTER_DATA:
      return { ...store, filterData: [...filterData(store.data, payload)] };
    default:
      return store;
  }
};

const filterData = (data, value) => {
  let newData;
  if (value == "javichu" || value == "openfoodfacts-contributors") {
    newData = data.filter((e) => e.creator == value);
  }
  if(value == ""){
    newData = data;
  }
  return newData;
};
