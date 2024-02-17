import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userSaga from "../saga/userSaga";
import { rootReducer } from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga);

export default store;
