import { takeLatest, put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

import {
    SET_CURRENT_USER,
    setCartItems
} from './../actions'

function* fetchCart({user}) {
    const { id } = user;
    console.info("This is user ID: ", id);
    console.info("This is the user: ", user);
    const response = yield fetch(`http://localhost:8081/cart/${id}`);
    const { items } = yield response.json();
    yield put(setCartItems(items));
}

export function* fetchCartSaga() {
    yield takeLatest(SET_CURRENT_USER, fetchCart);
}