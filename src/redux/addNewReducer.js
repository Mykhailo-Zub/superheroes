import { ADD_NEW } from "./types";

export const addNewReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW:
      return action.payload;
    default:
      return state;
  }
};
