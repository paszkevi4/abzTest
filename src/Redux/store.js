import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {usersReducer} from './usersReducer'
import {regReducer} from './regReducer'

let reducers = combineReducers ({
    form: formReducer,
    usersData: usersReducer,
    regData: regReducer,
})

let store = createStore (reducers, applyMiddleware(thunkMiddleware));

window.store = store
export default store;