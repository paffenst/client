import { combineReducers } from 'redux';
import authReducer from './authReducer';
//import {reducer } from 'react-final-form';

export default combineReducers({
    auth: authReducer,
   // form: useField 
});