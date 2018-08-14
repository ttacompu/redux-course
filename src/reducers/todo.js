import {TODO_CURRENT, TODO_ADD, TODO_LOAD } from '../variables';


const initState ={
    todos : [],
   currentTodo : ''
};

export default (state = initState, action) =>{
    switch(action.type){
        case TODO_ADD:
        return  {...state, currentTodo : '', todos : [...state.todos, action.payload]}
        case  TODO_CURRENT:
            return {...state, currentTodo : action.payload}
        case TODO_LOAD : 
             return {...state, todos : [...action.payload]}
        default:
            return state;
    }
}