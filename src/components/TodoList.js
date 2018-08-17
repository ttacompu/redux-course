import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchTodos, toggleTodo, deleteTodo} from '../actions/actions'


const TodoItem =({id, name, isComplete, toggleTodo, deleteTodo }) =>(
    <li>
        <span className="delete-item">
        <button onClick={()=>deleteTodo(id)}>x</button>
        </span>
        <input type="checkbox" checked={isComplete} onChange={()=>{toggleTodo(id)}} /> 
        {name}
        
     </li>
)

class TodoList extends Component{
    componentDidMount(){
        this.props.fetchTodos();
    }
    render(){
        const {todos} = this.props;
            return (
    <div className="Todo-List">
        <ul>
            {todos.map((todo, i) => (
                <TodoItem key={todo.id} {...todo}  
                toggleTodo={this.props.toggleTodo} 
                deleteTodo={this.props.deleteTodo} />
            ))}
        </ul>
    </div>
        )
    }
}


export default connect(state=>{return ({todos : state.todo.todos})},
{fetchTodos, toggleTodo, deleteTodo})(TodoList);