import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from './User/reducer'

export default combineReducers({
    user: UserReducer
})