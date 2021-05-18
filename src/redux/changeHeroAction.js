import axios from "axios";
import { CHANGE_HERO } from "./types";

const post = (hero) => {
  return {
    type: CHANGE_HERO,
    payload: hero,
  };
};

const changeHeroInfo = (url) => (dispatch, getState) => {
  const hero = getState().addNewReducer;
  const id = getState().getCurrentHeroIdReducer;
  axios.put(url + "/" + id, hero).then(({ data }) => dispatch(post(data)));
};

export default changeHeroInfo;
