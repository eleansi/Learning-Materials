import { CHANGE_SEARCH_FIELD } from '../constants/searchUsersConsts';

const initialState = {
  searchField: '',
};

const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export default { searchRobots };
