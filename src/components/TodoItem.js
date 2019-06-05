import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: '10px',
      backgroundColor: 'aliceblue',
      borderBottom: '1px #ccc dashed',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      display: 'flex'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input style={checkBoxStyle} type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} />
        <p style={pStyle}>{ title }</p>
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
      </div>
    )
  }
}

// Styles
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
const pStyle = {
  flexGrow: '2'
}
const checkBoxStyle = {
  marginRight: '1rem'
}

// PropType Validation
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default TodoItem
