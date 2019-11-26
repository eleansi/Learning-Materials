import { take, fork, put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

import {
    SET_CART_ITEMS,
    setItemDetails
} from './../actions'

export function* loadItemDetails(item){
    const { id } = item;
    console.info("This is the item id: ", id);
    console.info("The Item", item);
    const response = yield fetch(`http://localhost:8081/items/${id}`)
    const data = yield response.json();
    console.info("And the data for every item we received is: ", data[0]);
    const info = data[0];
    yield put(setItemDetails(info));
    console.info("Items? ", item);
}

export function* itemDetailsSaga() {
    const { items } = yield take(SET_CART_ITEMS);
    yield items.map(item=>fork(loadItemDetails,item));
}

