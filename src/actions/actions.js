import {TODO_CURRENT, TODO_ADD} from '../variables'
export function AddTodoAction(val){
    return { type : TODO_ADD  , payload : val};
}

export function CurrentTodoAction(val){
    return {type : TODO_CURRENT, payload : val};

}