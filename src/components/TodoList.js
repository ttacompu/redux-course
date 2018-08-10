import React from 'react'

const TodoItem =({id, name, isComplete }) =>(
    <li>
        <input type="checkbox" defaultChecked={isComplete} /> 
        {name}
     </li>
)

export default  ({todos}) =>(
    <div className="Todo-List">
    <ul>
        {todos.map((todo, i) => (
            <TodoItem key={todo.id} {...todo} />
        ))}
    </ul>
    </div>
)