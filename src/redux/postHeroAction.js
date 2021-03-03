import { POST_HERO } from "./types";
import axios from "axios";

const post = (hero) => {
  return {
    type: POST_HERO,
    payload: hero,
  };
};

export default function postHero(url) {
  return (dispatch, getState) => {
    const hero = getState().addNewReducer;
    axios.post(url, hero).then(({ data }) => dispatch(post(data)));
  };
}
