import { combineReducers } from 'redux';
import { requestUsers } from './fetchUsersReducer';
import { searchRobots } from './searchUsersReducer';

export default combineReducers({
  users: requestUsers,
  search: searchRobots,
});
