// Imports: Dependencies
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import state from '../../modules';
import rootSaga from './rootSagas';
// Imports: Redux Root Reducer
// import rootReducer from '../../redux/reducers';

const GLOBAL_STATE = combineReducers(state);

const middlewares = [];

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (__DEV__) {
	const createDebugger = require('redux-flipper').default;
	middlewares.push(createDebugger());
}

// Redux: Store
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(
	GLOBAL_STATE,
	undefined
);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export default store;
