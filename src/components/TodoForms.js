import React, {Component} from 'react'
import {connect} from 'react-redux';
import {CurrentTodoAction, saveTodo} from '../actions/actions';

class TodoForm extends Component{

    handleOnChange = (e) =>{
        this.props.CurrentTodoAction(e.target.value);
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.saveTodo(this.props.currentTodo);
    }

    render(){
        const {currentTodo} = this.props;
      

     return( 
           <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleOnChange} value={currentTodo} />
        </form> 
    )}
}


const stateToProps = (state) =>({currentTodo : state.currentTodo});
export default connect(stateToProps, {CurrentTodoAction, saveTodo})(TodoForm);