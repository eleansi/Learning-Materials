import { call, put, takeEvery, takeLatest, take } from 'redux-saga/effects';
import axios from 'axios';
import { USERS_FETCH_PENDING, USERS_FETCH_FAILED, USERS_FETCH_SUCCEEDED, USERS_FETCH_REQUESTED } from '../constants';
import { setUsersLoading, fetchUsersData } from '../actions';
import { fetchData } from '../api/fetchData';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUsers() {
  //  console.log("test saga");
  //  try {
  //     const response = yield call(fetch(api));
  //     const { users } = response.json();
  //     console.log(users);
  //       //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  //  } catch (e) {
  //     yield put({type: USERS_FETCH_FAILED, message: e.message});
  //  }
    yield put(setUsersLoading());
    const data = yield call(fetchData);
    yield put(fetchUsersData(data));
   
    // axios.get('https://my-json-server.typicode.com/eleansi/Insta-clone/users')
    // .then(response =>
    //     dispatch({
    //         type:  USERS_FETCH_SUCCEEDED,
    //         payload: response.data 
    //     }) 
    // )
    // .catch(err => 
    //     dispatch({
    //         type: USERS_FETCH_FAILED,
    //         payload: err
    //     })
    // );


    // // dispatch({ type: USERS_FETCH_PENDING, payload: });
    // const { items } = yield response.json();

    // yield put(fetchUsersData(items));
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* fetchUsersSaga() {
  yield takeLatest(USERS_FETCH_REQUESTED, fetchUsers);
}
