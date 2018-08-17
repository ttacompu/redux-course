import {MESSAGE_SHOW } from '../variables';

export default (state = '', action) =>{
    switch(action.type){
        case MESSAGE_SHOW:
            return  action.payload;
        default:
            return state;
    }
}