import axios from "axios";
import { REMOVE_HERO } from "./types";

const post = (hero) => {
  return {
    type: REMOVE_HERO,
    payload: hero,
  };
};

const removeHero = (url) => (dispatch, getState) => {
  const id = getState().getCurrentHeroIdReducer;
  axios.delete(url + "/" + id).then(({ data }) => dispatch(post(data)));
};

export default removeHero;
