import { put, takeLatest, select } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import { SET_CART_ITEMS, FETCHED, FETCHING, INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY,  setShippingFetchStatus,
    setShippingCost } from '../actions';
import { cartItemsSelector } from '../selectors';


function* shipping() {
    yield put(setShippingFetchStatus(FETCHING));
    const items = yield select(cartItemsSelector);

    const shippingItems = items.reduce((string, item) => {
        for (let i = 0; i < item.get('quantity'); i++) {
            string += item.get('id') + ",";
        }
        console.info("That's request string for the items: ", string);
        return string;
        
    }, "").replace(/,\s*$/, "");

    console.info("Everything is stored here", shippingItems);

    const response = yield fetch(`http://localhost:8081/shipping/${shippingItems}`);
       
        const { total } =  yield response.json();
        console.info('Items object for shipping', total);

    yield put(setShippingCost(total));
    yield put(setShippingFetchStatus(FETCHED));
}


export function* shippingSaga() {
    yield takeLatest([SET_CART_ITEMS, INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY], shipping);
} 