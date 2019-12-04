import { call, put, takeLatest } from "redux-saga/effects";
// import axios from 'axios';
import { USERS_FETCH_REQUESTED } from "../constants/usersFetchConsts";
import { setUsersLoading, fetchUsersData } from "../actions/usersFetchActions";
import { fetchData } from "../../api/fetchData";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUsers() {
  yield put(setUsersLoading());
  const data = yield call(fetchData);
  yield put(fetchUsersData(data));
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* fetchUsersSaga() {
  yield takeLatest(USERS_FETCH_REQUESTED, fetchUsers);
}
