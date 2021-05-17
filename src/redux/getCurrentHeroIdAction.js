import { GET_HERO_ID } from "./types";

const getCurrentHeroId = (id) => {
  return {
    type: GET_HERO_ID,
    payload: id,
  };
};

export default getCurrentHeroId;
