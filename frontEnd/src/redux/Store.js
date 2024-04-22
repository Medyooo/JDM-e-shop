import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import rootReducer from './reducers/RootReducer'
import { composeWithDevTools } from '@redux-devtools/extension'

const initialState = {}
const middlewares = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

export default store
