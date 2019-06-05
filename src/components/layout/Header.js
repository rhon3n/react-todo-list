import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">about</Link>
    </header>
  )
}

const headerStyle = {
  background: '#111',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  background: 'purple',
  padding: '5px 5px',
  borderRadius: '10%'
}
