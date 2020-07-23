//jshint esversion:9
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#b2b2b2',
            padding: '12px',
            borderBottom: '1px black solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style = { this.getStyle() }>
                <p> 
                    <input type = 'checkbox' onChange = { this.props.markComplete.bind(this, id) } /> {'   '}
                    { title } 
                    <button onClick = {this.props.delTodo.bind(this, id)} style = { btnStyle }>x</button>
                 </p>
            </div>
        )
    }
}
//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItem
