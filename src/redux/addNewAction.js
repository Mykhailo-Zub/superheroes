import { ADD_NEW } from "./types";

const addNew = (hero) => {
  return {
    type: ADD_NEW,
    payload: hero,
  };
};

export default addNew;
