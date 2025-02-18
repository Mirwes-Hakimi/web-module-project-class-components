import React from 'react'

export default class Todo extends React.Component {
  render() {
    const {todo} = this.props;

    if(!todo){
      return <p>Todo not found</p> /// prevents error if todo us undefined
    }
    return (
      <div onClick={ () => this.props.toggleTodo(this.props.todo.id)}
          style={{
            textDecoration: this.props.todo.compeleted ? 'line-through' : 'none',
            cursor: 'pointer',
            background: "green"
          }}
      >
        <p>{todo.name}</p>
      </div>
    )
  }
}
