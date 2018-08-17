import {TODO_CURRENT, TODO_ADD, TODO_LOAD, TODO_REPLACE,  MESSAGE_SHOW} from '../variables'
import { getTodos, createTodo, updateTodo } from '../lib/todoService';


export const AddTodoAction = (val) =>{
    return { type : TODO_ADD  , payload : val};
}

export const  CurrentTodoAction= (val) =>{
    return {type : TODO_CURRENT, payload : val};

}

export const LoadTodos = (todos) =>{
    return { type : TODO_LOAD, payload : todos }
}

export const AddTodo = (todo) =>{
    return { type : TODO_ADD, payload : todo }
}

export const showMessage = (message) => {
    return  {type : MESSAGE_SHOW, payload : message};
}
export const replaceTodo = (todo) =>{
    return  {type : TODO_REPLACE, payload : todo};
}

export const fetchTodos= () => {
    return (dispatch) =>
     {
        dispatch(showMessage('loading...'));
        getTodos().then(todos =>{
                dispatch(LoadTodos(todos))
            } )
    }
}

export const saveTodo = (name) =>{
    return (dispatch) =>{
        dispatch(showMessage('saving todo'));
        createTodo(name).then(res => dispatch(AddTodo(res)))
    }
}

export const toggleTodo =(id) =>{
    return (dispatch, getState) =>{
        dispatch(showMessage('toggling'));
        const {todos} = getState().todo;
        const todo = todos.find(t=>t.id === id);
        const toggleTodo = {...todo, isComplete : !todo.isComplete}
        updateTodo(toggleTodo).then(res => dispatch(replaceTodo(res)))
    }

}

