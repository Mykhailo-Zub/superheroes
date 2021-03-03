import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllReducer } from "./redux/getAllReducer";
import { addNewReducer } from "./redux/addNewReducer";
import { getHeroReducer } from "./redux/getHeroReducer";

const store = createStore(
  combineReducers({
    getAllReducer,
    addNewReducer,
    getHeroReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
