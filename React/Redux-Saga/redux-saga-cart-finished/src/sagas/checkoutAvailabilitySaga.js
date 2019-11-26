import { actionChannel, take, put } from 'redux-saga/effects';

import { SET_SHIPPING_FETCH_STATUS, setCanCheckOut, FETCHED } from './../actions';

export function* checkoutAvailabilitySaga() {
    const checkoutAvailability = yield actionChannel(SET_SHIPPING_FETCH_STATUS);
    while(true) {
        const { status } = yield take(checkoutAvailability);
        console.info("CHECKOUT STATUS HERE... ", status);
        yield put(setCanCheckOut(status === FETCHED));
    }
} 