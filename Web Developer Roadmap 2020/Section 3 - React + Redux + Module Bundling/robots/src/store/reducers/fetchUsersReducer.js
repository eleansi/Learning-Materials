import { USERS_FETCH_PENDING, USERS_FETCH_SUCCEEDED, USERS_FETCH_FAILED } from '../constants/usersFetchConsts';

const initialState = {
  isPending: false,
  users: [],
  error: '',
};

const requestUsers = (state = initialState, action = {}) => {
  switch (action.type) {
    case USERS_FETCH_PENDING:
      return { ...state, isPending: true };
    case USERS_FETCH_SUCCEEDED:
      return { ...state, users: action.payload, isPending: false };
    case USERS_FETCH_FAILED:
      return { ...state, error: action.payload, isPending: false };

    default:
      return state;
  }
};

export default requestUsers;
