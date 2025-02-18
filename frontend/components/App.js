import React from 'react';
import Form from './Form';
import TodoList from './TodoList';




export default class App extends React.Component {
  constructor (){
    super();
    this.state = {
    todos: []
    }
  }
  addToDo = (addName) => {
    const newToDo = {
      name: addName,
      id: Date.now(),
      compeleted: false
    }

    this.setState({todos: [...this.state.todos, newToDo]})
  }

  toggleTodo = (id) => {
    if(!this.state.todos) return; /// prevents errors if todos is undefine
    this.setState({
      todos: this.state.todos.map(todo =>
      todo.id === id ? {...todo, compeleted: !todo.compeleted } : todo
      )
  });
  };
  render() {
    return (
      <div>
        <Form addToDo = {this.addToDo}/>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
      </div>
    )
  }
}
