let process = function*() {
	while(true) {
		console.log("Process Looped");
		yield delay(1000);
	}
}
// The saga will go to the end and display the console.info "Saga got to the end"
// but the process will not run until an action is dispatched
// NOTE: if we continuesly dispatch an action it will continue fork processes so 
// make sure you dispatch an action once
let saga = function*() {
	yield effects.takeEvery("START_PROCESS", process);
	let state = yield effects.put({type: "START_PROCESS", payload: 42});
	console.info("Here is the payload... ", state);
	console.info("Saga got to the end...");
}

run(saga);


// WRAPPER START: take and put
// Take the action type and combine it with put effect because take is waiting for dispatch event
// and put works just like dispatch but with sagas only
let mySaga = function*() {
	console.info("Saga begins...");
	const state = yield effects.take("SET_STATE");
	// doesn't execute until dispatch is called 
	console.info("Got state...", state);
}
run(mySaga);
let putSaga = function*() {
	yield effects.put({type: "SET_STATE", payload: 42});
}
run(putSaga);
// WRAPPER END: take and put

// Saga for cancel and cancelled redux-saga methods

let process = function*() {
	try {
		while(true) {
			console.log("Process Looped");
			yield delay(500);
		}
	} finally {
		let cancelled = yield effects.cancelled();
		 console.info('Cancelled? ', cancelled);
	}
}

let saga = function*() {
    let forket = yield effects.fork(process);
    yield delay(5000);
    yield effects.cancel(forket);
    console.log("DONE");
}

run(saga);


// Using takeLatest 
let process = function*() {
	let timesLooped = 0;
    while(true) {
        console.info(`Process is looped: ${timesLooped++}`);
        yield delay(500);
    }
}

let saga = function*() {
    yield effects.takeLatest("START_PROCESS", process);
}

run(saga);

dispatch({type: "START_PROCESS"});

// Spawn method event when Error occurs it continues to run the process

let process = function*() {
	let timesLooped = 0;
    while(true) {
        console.info(`Process is looped: ${timesLooped++}`);
        yield delay(500);
    }
}


let saga = function*() {
	yield effects.spawn(process);
	yield delay(2000);
	throw new Error();
}

run(saga);


// USING CHANNELS 
function* updateSaga() {
	let chan = actionChannel("UPDATE");
	while(true) {
		yield effects.take("UPDATE");
		
		console.info("Updated log!");
		
		yield delay(100);
	}
}

run(updateSaga);
dispatch({type:"UPDATE"});

// GENERIC CHANNELS using nested generator functions
function* saga() {
    let chan = yield channel();
    function* handleRequest(chan) {
        while(true) {
            let payload = yield effects.take(chan);
            console.info("Request made and the payload is: ", payload);
            yield delay(1000);
        }
    }
    
    yield effects.fork(handleRequest, chan);
    yield effects.fork(handleRequest, chan);
	// Each put must have respective handler fork(handleRequest) for example but when 
	// it doesn't have handler it just stores it inside the channel
	yield effects.put(chan, { payload: 42 }) ;
	yield effects.put(chan, { payload: 42 }) ;
	yield effects.put(chan, { payload: 42 }) ;
}

run(saga);
