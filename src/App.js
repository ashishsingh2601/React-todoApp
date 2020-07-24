//jshint esversion:9

import React from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import {v4 as uuid} from 'uuid';

import './App.css';

class App extends React.Component{
  state = {
    todos: [
      {
        id: uuid,
        title: 'Complete project',
        completed: false
      },
      {
        id: uuid,
        title: 'Take out the trash',
        completed: false 
      },
      {
        id: uuid,
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
  //Add Todo
  addTodo = (title) => {
      const newTodo = {
        id: uuid,
        title,
        completed: false
      };
      this.setState({ todos: [...this.state.todos, newTodo]});
  }
  render(){
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete = { this.markComplete } delTodo = { this.delTodo } />
      </div>
    </div>
  );
  }
}

export default App;
