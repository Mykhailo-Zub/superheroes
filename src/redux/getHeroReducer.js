import { GET_HERO } from "./types";

export const getHeroReducer = (state = [], action) => {
  switch (action.type) {
    case GET_HERO:
      return action.payload;
    default:
      return state;
  }
};
