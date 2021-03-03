import { GET_ALL } from "./types";

export const getAllReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL:
      return action.payload;
    default:
      return state;
  }
};
