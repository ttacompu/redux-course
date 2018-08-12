import React from 'react'

export default  ({onToggleChange, currentTodo}) =>{
    const handleOnChange = (e) =>{
           onToggleChange(e.target.value);
    }
    return (
        <form>
            <input type="text" onChange={handleOnChange} value={currentTodo} />
        </form> 
    )
}