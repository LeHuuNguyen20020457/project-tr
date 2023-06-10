import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddeware from '@redux-saga/core';

import { reducer } from './reducers';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddeware();

const store = configureStore({
    reducer,
    middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
