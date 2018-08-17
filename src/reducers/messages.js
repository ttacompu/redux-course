import {MESSAGE_SHOW, TODO_REPLACE, TODO_ADD, TODO_LOAD } from '../variables';

export default (state = '', action) =>{
    switch(action.type){
        case MESSAGE_SHOW:
            return  action.payload;
        case TODO_LOAD:
        case TODO_REPLACE:
        case TODO_ADD:
            return '';
        default:
            return state;
    }
}