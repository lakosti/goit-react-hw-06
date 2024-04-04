import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const rootReducer = combineReducers({});

//devTools
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
