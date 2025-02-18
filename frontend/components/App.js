import React from 'react';
import Form from './Form';
import Todo from './Todo';
import TodoList from './TodoList';
import { date } from 'yup';



export default class App extends React.Component {
  constructor (){
    super();
    this.state = {
    todos: [
      {
        name: 'Organize the garage',
        id: Math.random(),
        compeleted: false
      }
    ]
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
  render() {
    return (
      <div>
        <Form addToDo = {this.addToDo}/>
        <TodoList todos={this.todos} />
      </div>
    )
  }
}
