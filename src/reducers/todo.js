import {TODO_CURRENT, TODO_ADD} from '../variables'
const initState ={
    todos : [
        {id : 1, name : 'Render static UI', isComplete : true},
       {id : 2, name : 'Create initial State', isComplete : true},
       {id : 3, name : 'Render based on state', isComplete : false}
   ],
   currentTodo : ''
};
export default (state = initState, action) =>{
    switch(action.type){
        case TODO_ADD:
        return  {...state, todos : [...state.todos, action.payload]}
        case  TODO_CURRENT:
            return {...state, currentTodo : action.payload}
        default:
            return state;
    }
}