import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { Root_Reducer } from './Reducer/Root_Reducer'
import { rootSaga } from '../Saga/Root_saga'


const sagaMiddleware = createSagaMiddleware()

const middleware = [
    thunk, sagaMiddleware
]

export const store = createStore(
    Root_Reducer,
    applyMiddleware(...middleware)
)


sagaMiddleware.run(rootSaga)