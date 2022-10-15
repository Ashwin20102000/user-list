import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { fetchData } from "./usersSlice";
import { keys } from "../utils/keys";

let callAPI = async ({ url, method, data }) => {
  return await Axios({
    url,
    method,
    data
  });
};

export function* fetchDataSaga() {
  try {
    let result = yield call(() => callAPI({ url: keys.usersApi,method:'GET' }));
    yield put(fetchData(result.data));
  } catch (e) {
    yield put({ type: "USERS_DATA_FETCH_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(keys.FETCH_DATA_SAGA, fetchDataSaga);
}
