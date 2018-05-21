import React, { Component } from 'react'
import TodoElement from './TodoElement'
import './TodoList.scss'

class TodoList extends Component {
    edit (e) {
        console.log(e)
        this.props.updateTask(e)
    }

    listTodos () {
        const todo = this.props.data
        
        return todo.map((element) => 
            <TodoElement key={element.text} data={element} updateTask={(e) => this.edit(e)} />
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