import React from 'react'

export default props => 
    <p
        style={{textDecoration: props.todo.complete ? "line-through" : ''}} 
        onClick={props.toggleComplete}>{props.todo.text}
    </p>