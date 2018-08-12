import React, { Component } from 'react';
import  TodoForm from './components/TodoForms';
import  TodoList from './components/TodoList';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {CurrentTodoAction} from './actions/actions';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with Redux</h1>
        </header>
        <div className="Todo-App">
            <TodoForm currentTodo={this.props.currentTodo} onToggleChange={this.props.CurrentTodoAction} />
            <TodoList todos = {this.props.todos} />
            
        </div>
      </div>
    );
  }
}

export default  connect((state) => state, {CurrentTodoAction})(App)