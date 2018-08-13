import React, { Component } from 'react';
import  TodoForm from './components/TodoForms';
import  TodoList from './components/TodoList';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with Redux</h1>
        </header>
        <div className="Todo-App">
            <TodoForm  />
            <TodoList todos = {this.props.todos} />
            
        </div>
      </div>
    );
  }
}

export default  App;