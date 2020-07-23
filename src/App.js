//jshint esversion:9

import React from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends React.Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Complete project',
        completed: false
      },
      {
        id: 2,
        title: 'Take out the trash',
        completed: false 
      },
      {
        id: 3,
        title: 'Going on date',
        completed: false
      }
    ]
  }
  
  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render(){
  return (
    <div className="App">
      <Todos todos={this.state.todos} markComplete = { this.markComplete } delTodo = { this.delTodo } />
    </div>
  );
  }
}

export default App;
