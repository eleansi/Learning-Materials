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