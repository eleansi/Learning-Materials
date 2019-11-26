import { take, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { connect } from '../createSocketConnection';
import { setCustomerServiceAvailability } from './../actions';


export function* customerServiceAvailableSaga() {
    let socket = connect();
    let channel = new eventChannel(emit => {

        const enableSupportMessage = () => {
            emit(true);
        }

        const disableSupportMessage = () => {
            emit(false);
        }

        socket.on("SUPPORT_AVAILABLE", enableSupportMessage);
        socket.on("SUPPORT_NOT_AVAILABLE", disableSupportMessage);

        return () => {
            
        }
    });

    while(true) {
        let supportAvailable = yield take(channel);
        yield put(setCustomerServiceAvailability(supportAvailable));
    }
};

