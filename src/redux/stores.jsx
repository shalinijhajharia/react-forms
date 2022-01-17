import { applyMiddleware, createStore } from "redux";
import { reducers } from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension'

import thunkMiddleware from 'redux-thunk'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


export const stores = createStore(reducers, composedEnhancer)