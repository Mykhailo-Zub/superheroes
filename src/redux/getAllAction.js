import axios from "axios";
import { GET_ALL } from "./types";

const getAll = (heroes) => {
  return {
    type: GET_ALL,
    payload: heroes,
  };
};

const getAllHeroes = (url) => (dispatch) =>
  axios.get(url).then(({ data }) => dispatch(getAll(data)));

export default getAllHeroes;
