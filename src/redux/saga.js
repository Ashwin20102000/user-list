import { call, takeEvery, put, fork, all } from "redux-saga/effects";
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
    let result1 = yield call(() => callAPI({ url: keys.usersApi,method:'POST' ,body:data}));
    let result = yield call(() => callAPI({ url: keys.usersApi,method:'GET' }));
    yield put(addUser([...result.data,...result1.data]));
  } catch (e) {
    yield put({ type: "USERS_DATA_ADD_FAILED" });
  }
}
function* getUserSaga(){
  yield takeEvery(keys.FETCH_DATA_SAGA, fetchDataSaga);
}

function* addUserSaga(){
  yield takeEvery(keys.ADD_DATA_SAGA, AddDataSaga);
}

const userSagas = [fork(getUserSaga),fork(addUserSaga)]
export default function* rootSaga() {
  yield all([...userSagas]);
}
