import React, { Component } from 'react';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import './App.css';
import uuid from 'uuid'
 
class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Feed the cat',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Write a newsletter',
        completed: false
      }      
    ]
  };

  // Toggle complete
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
        return todo;
      })
    });
  }

  // Delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Add todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete}  delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
