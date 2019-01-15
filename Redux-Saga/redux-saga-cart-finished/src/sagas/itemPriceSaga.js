
import { take, put, call, all } from "redux-saga/effects";
import fetch from 'isomorphic-fetch';

import { SET_CURRENT_USER, SET_CART_ITEMS, SET_ITEM_DETAILS, setItemPrice } from '../actions';


function* fetchItemsPrice(id, symbolCurrency) {
    const response = yield call(fetch, `http://localhost:8081/prices/${symbolCurrency}/${id}`);
    const data = yield response.json();
    const price = data[0].price;
    console.info('And there are the prices', price);
    yield put(setItemPrice(id, price))
}

export function* itemPriceSaga() {
    const [{ user }, { items }] = yield all([
        take(SET_CURRENT_USER),
        take(SET_CART_ITEMS)
    ]);

    yield items.map(item => call(fetchItemsPrice, item.id, user.country));
}
