import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: '10px',
      backgroundColor: 'aliceblue',
      borderBottom: '1px #ccc dashed',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} />
        <p>{ title }</p>
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
      </div>
    )
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default TodoItem
