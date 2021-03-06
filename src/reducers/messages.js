import {MESSAGE_SHOW, TODO_REPLACE, TODO_ADD, TODO_LOAD, TODO_REMOVE } from '../variables';

export default (state = '', action) =>{
    switch(action.type){
        case MESSAGE_SHOW:
            return  action.payload;
        case TODO_LOAD:
        case TODO_REPLACE:
        case TODO_ADD:
        case TODO_REMOVE:
            return '';
        default:
            return state;
    }
}