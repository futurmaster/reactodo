import React, { Component } from 'react'
import TodoElement from './TodoElement'
import './TodoList.scss'

class TodoList extends Component {
    
    listTodos () {
        const todo = this.props.data
        
        return todo.map((element) => 
            <TodoElement key={element.text} data={element} updateTask={this.props.updateTask} controlTask={this.props.controlTask} />
        )
    }

    render () {
        const list = this.listTodos()

        return (
            <ul>
                { list }
            </ul>
        )
    }
}

export default TodoList