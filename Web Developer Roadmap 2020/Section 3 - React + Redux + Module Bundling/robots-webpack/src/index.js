import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import App from './containers/App.js';

// // import 'tachyons';
import { initSagas } from './initSagas';
import rootReducer from './store/reducers';
import * as serviceWorker from './serviceWorker';

const rootId = document.getElementById("root");

// // initialize middlewares
const logger = createLogger();
// // create the saga middleware
const sagaMiddleware = createSagaMiddleware();


// // Compose all middlewares
const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;


// // Gather middlewares
const middleware = [sagaMiddleware, thunk, logger];

// // Compose and apply middleware
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(rootReducer, enhancer);

// // then run the saga
initSagas(sagaMiddleware);
// const wrapper = document.getElementById("root"); 
// wrapper ? ReactDOM.render(<Provider store={store} ><App /></Provider>, wrapper) : false;
// ReactDOM.render(<Provider store={store}><App /></Provider>, rootId);

// if (module.hot && process.env.NODE_ENV === "development") {
//   module.hot.accept("./App", () => {
//     const NextApp = require("./App").default;
//     ReactDOM.render(<Provider store={store}><App /></Provider>, rootId);
//   });
// }
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
