import { USERS_FETCH_PENDING, USERS_FETCH_SUCCEEDED, USERS_FETCH_FAILED } from '../constants.js';

const initialState = {
    isPending: false,
    users: [],
    error: ''
};

export const requestUsers = (state = initialState, action = {}) => {
    switch(action.type) {
        case USERS_FETCH_PENDING: 
            return Object.assign({}, state, { isPending: true });
        case USERS_FETCH_SUCCEEDED: 
            return Object.assign({}, state, { users: action.payload, isPending: false });
        case USERS_FETCH_FAILED: 
            return Object.assign({}, state, { error: action.payload, isPending: false });
            
        default:
            return state;
    }
}