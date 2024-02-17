import { GET_PIGS } from "../action/action";

export const pigsReducer = (pigs = [], action) => {
  switch (action.type) {
    case GET_PIGS:
      return [action.payload];
    default:
      return pigs;
  }
};
