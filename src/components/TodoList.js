import React from 'react'
import {connect} from 'react-redux';;

const TodoItem =({id, name, isComplete }) =>(
    <li>
        <input type="checkbox" defaultChecked={isComplete} /> 
        {name}
     </li>
)

  let TodoList=({todos}) =>console.log("list rendering") || (
    <div className="Todo-List">
    <ul>
        {todos.map((todo, i) => (
            <TodoItem key={todo.id} {...todo} />
        ))}
    </ul>
    </div>
)

export default connect((state)=>({todos : state.todos}))(TodoList);