import React, {Component} from 'react'
import {connect} from 'react-redux';
import {CurrentTodoAction, saveTodo} from '../actions/actions';
import { bindActionCreators } from 'redux';

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


const stateToProps = (state) =>{return ({currentTodo : state.todo.currentTodo}) };

const mapDispatchToProps = (dispatch) =>{
    return { CurrentTodoAction : bindActionCreators(CurrentTodoAction, dispatch),
        saveTodo :bindActionCreators(saveTodo, dispatch)
    }
} 


export default connect(stateToProps,  mapDispatchToProps )(TodoForm);