import {put, call, take} from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import { SET_CURRENT_USER, setTaxRate } from '../actions';



export function* taxRateSaga() {
    const { user } = yield take(SET_CURRENT_USER);
    const symbol = user.country;
    console.info(`Event for setting current user from ${symbol}: `, user);
    const response = yield fetch(`http://localhost:8081/tax/${symbol}`);
    const { rate } = yield response.json();
    yield put(setTaxRate(rate));
}