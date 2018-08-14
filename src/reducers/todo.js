import {TODO_CURRENT, TODO_ADD} from '../variables';
import {getTodos} from '../lib/todoService';

const initState ={
    todos : [],
   currentTodo : ''
};

export default (state = initState, action) =>{
    switch(action.type){
        case TODO_ADD:
        return  {...state, todos : [...state.todos, action.payload]}
        case  TODO_CURRENT:
            return {...state, currentTodo : action.payload}
        case TODO_LOAD : 
             return {...state, todos : [...acton.payload]}
        default:
            return state;
    }
}