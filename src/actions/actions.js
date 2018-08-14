import {TODO_CURRENT, TODO_ADD, TODO_LOAD} from '../variables'
import { getTodos, createTodo } from '../lib/todoService';


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

export const fetchTodos= () => {
    return (dispatch) => {
            getTodos().then(todos =>{
                dispatch(LoadTodos(todos))
            } )
    }
}

export const saveTodo = (name) =>{
    return (dispatch) =>{
        createTodo(name).then(res => dispatch(AddTodo(res)))
    }

}