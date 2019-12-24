/**
 * @Author: tnlong1997
 * @Date:   2019-12-15T12:54:12-05:00
 * @Email:  tnlong1997@gmail.com
 * @Last modified by:   tnlong1997
 * @Last modified time: 2019-12-21T18:36:49-05:00
 */

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import {forbiddenWordsMiddleware} from "../middlewares";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;
