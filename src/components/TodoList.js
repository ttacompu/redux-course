import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchTodos} from '../actions/actions'
import { bindActionCreators } from 'redux';

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

const mapDispatchToProps = (dispatch) =>{
    return { fetchTodos : bindActionCreators(fetchTodos, dispatch)}
} 
export default connect(state=>{return ({todos : state.todo.todos})},mapDispatchToProps)(TodoList);