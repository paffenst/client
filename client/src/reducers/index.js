import { combineReducers } from 'redux'
import authReducer from './authReducer'
import reducers from '../reducers'
import { Form, Field } from 'react-final-form'
import streamReducer from './streamReducer'

export default combineReducers({
    auth: authReducer,
    streams : streamReducer
    //form: Form 
});