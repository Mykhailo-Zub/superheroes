import axios from "axios";
import { GET_HERO } from "./types";

const getHero = (info) => {
  return {
    type: GET_HERO,
    payload: info,
  };
};

const getHeroInfo = (url) => (dispatch) => {
  console.log(url);
  axios.get(url).then(({ data }) => dispatch(getHero(data)));
};

export default getHeroInfo;
