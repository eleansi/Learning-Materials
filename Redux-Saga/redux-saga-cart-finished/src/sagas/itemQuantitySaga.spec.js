import fetch from 'isomorphic-fetch';
import { put, call, takeLatest, select } from 'redux-saga/effects';

import { handleDecreaseItemQuantity,
         handleIncreaseItemQuantity,
         itemQuantitySaga} from './itemQuantitySaga';

import { setItemQuantityFetchStatus,
         INCREASE_ITEM_QUANTITY,
         DECREASE_ITEM_QUANTITY,
         FETCHED,
         FETCHING,
         increaseItemQuantity,
         decreaseItemQuantity } from '../actions';
import { fromJS } from 'immutable';
import { currentUserSelector } from '../selectors';

describe.only("the item quantity saga",()=>{
    let item;
    let user;
    beforeEach(()=>{
        item = { id:123456 };
        user = fromJS({ id:"ABCDE" });
    });
    describe("the saga root",()=>{
        test("the saga root should listen for the events",()=>{
            const gen = itemQuantitySaga();
            expect(gen.next().value).toEqual([
                takeLatest(INCREASE_ITEM_QUANTITY, handleIncreaseItemQuantity),
                takeLatest(DECREASE_ITEM_QUANTITY, handleDecreaseItemQuantity)
            ]);
        });
    });

   describe("Handle decrease items quantity saga", () => {
        test("Decreasing the quantity of an item successfully",()=>{
            let gen = handleDecreaseItemQuantity(item);
            expect(gen.next().value).toEqual(put(setItemQuantityFetchStatus(FETCHING)));
            expect(gen.next().value).toEqual(select(currentUserSelector));
            expect(gen.next(user).value).toEqual(call(fetch, "http://localhost:8081/cart/remove/ABCDE/123456"));
            expect(gen.next({ status: 200 }).value).toEqual(put(setItemQuantityFetchStatus(FETCHED)));
        });
   });

   describe("Handle increase items quantity saga", () => {
       let gen;
       beforeEach(() => {
           gen = handleIncreaseItemQuantity(item);
           expect(gen.next().value).toEqual(put(setItemQuantityFetchStatus(FETCHING)));
           expect(gen.next().value).toEqual(select(currentUserSelector));
           expect(gen.next(user).value).toEqual(call(fetch, "http://localhost:8081/cart/add/ABCDE/123456"));
       });
       test("Increase the quantity of an item successfully", () => {
           expect(gen.next({ status: 200 }).value).toEqual(put(setItemQuantityFetchStatus(FETCHED)));
       });
       test("Increase the quantity of an item unsuccessfully", () => {
            expect(gen.next({ status: 500 }).value).toEqual(put(decreaseItemQuantity(item.id, true)));
            expect(gen.next().value).toEqual(put(setItemQuantityFetchStatus(FETCHED)));
       });
   })
});