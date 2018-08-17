import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchTodos, toggleTodo} from '../actions/actions'


const TodoItem =({id, name, isComplete, toggleTodo }) =>(
    <li>
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
                <TodoItem key={todo.id} {...todo}  toggleTodo={this.props.toggleTodo} />
            ))}
        </ul>
    </div>
        )
    }
}


export default connect(state=>{return ({todos : state.todo.todos})},
{fetchTodos, toggleTodo})(TodoList);