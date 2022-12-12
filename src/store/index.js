import { legacy_createStore, combineReducers } from 'redux'

import userInfoReducer from './userInfo/reducer'

const reducers = combineReducers({
    userInfoReducer
})
const store = legacy_createStore(reducers); 

export default store
