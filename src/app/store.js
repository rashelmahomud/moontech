import { createStore } from "@reduxjs/toolkit";
import productReducer from "../redux/reducers/productReducer";
import {composeWithDevTools} from '@redux-devtools/extension';

const store = createStore(productReducer, composeWithDevTools());

export default store;