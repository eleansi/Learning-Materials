import {
  USERS_FETCH_SUCCEEDED,
  USERS_FETCH_FAILED,
  USERS_FETCH_PENDING,
  USERS_FETCH_REQUESTED,
} from '../constants/usersFetchConsts';

// Set loading state
export const setUsersLoading = () => ({
  type: USERS_FETCH_PENDING,
});

// Set loading state
export const requestFetchUsers = () => ({
  type: USERS_FETCH_REQUESTED,
});

export const fetchUsersData = (data) => ({
  type: USERS_FETCH_SUCCEEDED,
  payload: data,
});

// Dispatch specific error to the store
export const catchFetchUsersError = (error) => ({
  type: USERS_FETCH_FAILED,
  payload: error,
});
