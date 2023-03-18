import reducer from "./reducer";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore(reducer, {} , composeWithDevTools(applyMiddleware(thunk)))