import { createStore, applyMiddleware } from "redux";
import { questionReducer } from "./questions/reducer";
import thunk from "redux-thunk"

export const store = createStore(questionReducer, applyMiddleware(thunk));
