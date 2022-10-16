import { call, takeEvery, put, takeLatest } from "redux-saga/effects";
import Axios from "axios";
import { addUser, fetchData } from "./usersSlice";
import { keys } from "../utils/keys";
import { callAPI } from "./callAPI";


export function* fetchDataSaga() {
  try {
    let result = yield call(() => callAPI({ url: keys.usersApi,method:'GET' }));
    yield put(fetchData(result.data));
  } catch (e) {
    yield put({ type: "USERS_DATA_FETCH_FAILED" });
  }
}

export function* AddDataSaga(data) {
  try {
    let result = yield call(() => callAPI({ url: keys.usersApi,method:'POST' ,body:data}));
    yield put(addUser(result.data));
  } catch (e) {
    yield put({ type: "USERS_DATA_ADD_FAILED" });
  }
}
export default function* rootSaga() {
  yield takeLatest(keys.ADD_DATA_SAGA, AddDataSaga);
  yield takeEvery(keys.FETCH_DATA_SAGA, fetchDataSaga);
}
