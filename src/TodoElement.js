import React, { Component } from 'react'

class TodoElement extends Component {
    edit (id) {
        this.props.updateTask(id)
    }

    render () {
        const text = this.props.data.text
        const isDone = this.props.data.done
        const id = this.props.data.id
        
        return (
            <li className={isDone ? 'bg-success text-light font-weight-bold' : ''}>{ isDone ? '' : <small><span className="fa fa-edit" title="Click to edit" onClick={this.edit(id)}></span>&nbsp;&nbsp;</small> }{text}{ isDone ? <strong>&nbsp;&nbsp;<span className="fa fa-check"></span></strong> : '' }</li>
        )
    }
}

export default TodoElement