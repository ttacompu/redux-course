import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';

import todoReducer from './reducers/todo';
import messageReducer from './reducers/messages';


const reducer = combineReducers({todo : todoReducer, message : messageReducer});

export default createStore(reducer,
    applyMiddleware(thunk)
);