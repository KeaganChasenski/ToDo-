import React, { Component } from 'react';
import ToDos from './ToDos' ; 
import AddToDo from './AddToDo' ; 


class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'Make website'},
      {id: 2, content: 'Message holly'},
    ]
  }

  deleteTodo = (id) => {
    //console.log(id) ; 
    const todos =  this.state.todos.filter(todo => {
      return todo.id !== id 
    }) ; 
    this.setState({
      todos: todos 
    })

  }

  addTodo = (todo) => {
    todo.id = Math.random() 
    let todos =  [...this.state.todos, todo]
    this.setState({
      todos: todos 
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">To Do's</h1>
        <ToDos todos = { this.state.todos }  deleteTodo= {this.deleteTodo }/>
        <AddToDo addTodo= { this.addTodo } />
      </div>
    );
  }
}

export default App;
