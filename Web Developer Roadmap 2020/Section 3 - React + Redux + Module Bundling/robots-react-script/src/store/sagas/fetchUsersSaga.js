import { call, put, takeLatest, all } from "redux-saga/effects";
// import axios from 'axios';
import { USERS_FETCH_REQUESTED } from "../constants/usersFetchConsts";
import { setUsersLoading, fetchUsersData } from "../actions/usersFetchActions";
import { fetchData } from "../../api/fetchData";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUsers() {
  yield put(setUsersLoading());

  try {
    const data = yield call(fetchData, "people");

    yield put(fetchUsersData(data));

    // console.log(data.results);
    let results = data.results;

    let urlsMovieStore = [];
    results.map((element, index) => {
      let name = element.name;
      let films = element.films;

      // Extract id from array with API endpoints
      urlsMovieStore.push({name: name, urlsMovies: []})
      const regex = /\d+/; 
      console.log(name);
      
      films.map((film) => {
        const matchId = film.match(regex);
        urlsMovieStore[index].urlsMovies.push(matchId[0]);
      });
    });

    urlsMovieStore.map((actor) => {
      const actorsMovies = actor.urlsMovies;
      console.log(actorsMovies);
    });

  } catch (e) {

  }
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
