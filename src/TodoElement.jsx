import React, { Component } from 'react'

class TodoElement extends Component {

    render () {
        const text = this.props.data.text
        const isDone = this.props.data.isDone
        const id = this.props.data.id
        
        return (
            <li className={ isDone ? 'bg-success text-light font-weight-bold' : '' } title="Double click to mark this task as done/undone" onDoubleClick={(e) => this.props.controlTask(id)}>
                { !isDone && <small><span className="fa fa-trash-alt" title="Click to delete this task" onClick={(e) => this.props.controlTask(id, 'remove')}></span>&nbsp;&nbsp;<span className="fa fa-edit" title="Click to edit this task" onClick={(e) => this.props.updateTask(id)}></span>&nbsp;&nbsp;</small> }
                {text}
                { isDone ? <strong>&nbsp;&nbsp;<span className="fa fa-check"></span></strong> : '' }
            </li>
        )
    }
}

export default TodoElement