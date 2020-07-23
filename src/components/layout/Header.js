//jshint esversion:9

import React from 'react';

function Header(){
    return (
        <header style = { headerStyle }>
            <h1>Todo List</h1>
        </header>
    )
} 
const headerStyle = {
    textAlign: 'center',
    background: '#333',
    color: '#fff',
    padding: '12px'
  }

export default Header;