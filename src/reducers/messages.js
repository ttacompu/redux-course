import {MESSAGE_SHOW } from '../variables';

export default (state = '', action) =>{
    switch(action.type){
        case MESSAGE_SHOW:
            return  {...state, message:action.payload}
        default:
            return state;
    }
}