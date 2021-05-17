import { GET_HERO_ID } from "./types";

export const getCurrentHeroIdReducer = (state = [], action) => {
  switch (action.type) {
    case GET_HERO_ID:
      return action.payload;
    default:
      return state;
  }
};
