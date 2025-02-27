import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {

  render() {
   
    return (
      <div>
      {this.props.todos && this.props.todos.map((todo) => (
        <Todo
         key={todo.id} 
         todo={todo}
         toggleTodo={this.props.toggleTodo}
         />
      ))}
       
      </div>
    )
  }
}
