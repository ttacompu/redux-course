import {TODO_CURRENT, TODO_ADD, TODO_LOAD, TODO_REPLACE, TODO_REMOVE } from '../variables';


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
        case TODO_REPLACE : 
            return {...state, todos : state.todos.map(t => (t.id === action.payload.id) 
                ? action.payload 
                : t   ) };
        case TODO_REMOVE:
                return {...state, todos : state.todos.filter(t => t.id !== action.payload)};
        default:
            return state;
    }
}