import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchTodos} from '../actions/actions'

const TodoItem =({id, name, isComplete }) =>(
    <li>
        <input type="checkbox" defaultChecked={isComplete} /> 
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
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    </div>
        )
    }
}


export default connect(state=>({todos : state.todo.todos}),{ fetchTodos })(TodoList);