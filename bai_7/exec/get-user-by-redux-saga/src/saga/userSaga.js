import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  DELETE_USER,
  DELETE_USER_SUCCESS,
  FETCH_USER,
  FETCH_USER_SUCCESS,
} from "../redux/action";

const BaseURL = "https://jsonplaceholder.typicode.com/users";
function* getUser(action) {
  try {
    const respone = yield axios.get(BaseURL);
    yield put({ type: FETCH_USER_SUCCESS, payload: respone.data });
  } catch (err) {
    console.log(err);
  }
}

function* deleteUser(action) {
  try {
    yield axios.delete(
      `https://jsonplaceholder.typicode.com/users/${action.payload}`
    );
    yield put({ type: DELETE_USER_SUCCESS, payload: action.payload });
  } catch (err) {
    console.log(err);
  }
}
function* userSaga() {
  yield takeLatest(FETCH_USER, getUser);
  yield takeLatest(DELETE_USER, deleteUser);
}
export default userSaga;
