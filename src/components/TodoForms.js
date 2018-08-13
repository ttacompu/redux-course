import React from 'react'
import {connect} from 'react-redux';
import {CurrentTodoAction} from '../actions/actions';

let TodoForm =  ({CurrentTodoAction, currentTodo}) =>{
    const handleOnChange = (e) =>{
        CurrentTodoAction(e.target.value);
    }
    return (
        <form>
            <input type="text" onChange={handleOnChange} value={currentTodo} />
        </form> 
    )
}

const stateToProps = (state) =>({currentTodo : state.currentTodo});
export default connect(stateToProps, {CurrentTodoAction})(TodoForm);