import axios from 'axios';
import { CHANGE_SEARCH_FIELD, USERS_FETCH_SUCCEEDED, USERS_FETCH_FAILED, USERS_FETCH_PENDING, USERS_FETCH_REQUESTED } from './constants.js';

// Set loading state
export const setUsersLoading = () => {
    return {
      type: USERS_FETCH_PENDING
    };
  };

  // Set loading state
export const requestFetchUsers = () => {
    return {
      type: USERS_FETCH_REQUESTED
    };
  };
  
export const fetchUsersData = (data) => ({
    type: USERS_FETCH_SUCCEEDED,
    payload: data
})

export const setSearchField = (text) => ({
     type: CHANGE_SEARCH_FIELD,
     payload: text
});

// Two functions
// This fetchUsersData() is unknown syntax to the redux because it expects object to dispatch an action
// but instead its returning another function which is dispatch and redux-thunk is expecting that in order to process 
// our async api call
// export const fetchUsersData = () => (dispatch) => {
//     dispatch(setUsersLoading());
//     axios.get('https://my-json-server.typicode.com/eleansi/Insta-clone/users')
//     .then(response =>
//         dispatch({
//             type:  USERS_FETCH_SUCCEEDED,
//             payload: response.data 
//         }) 
//     )
//     .catch(err => 
//         dispatch({
//             type: USERS_FETCH_FAILED,
//             payload: err
//         })
//     );
// };