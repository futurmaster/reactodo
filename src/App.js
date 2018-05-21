import _ from 'lodash'
import React, { Component } from 'react'
import './App.scss'
import TodoList from './TodoList'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      taskList: [],
      taskText: '',
      edit: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.saveTask = this.saveTask.bind(this)
    this.editTask = this.editTask.bind(this)
  }

  handleInputChange (e) {
    e.preventDefault();

    this.setState({
      taskText: e.target.value
    })
  }

  generateId () {
    let random = _.random(1, 9999)
    while(_.find(this.state.generateId, { id: random })) {
      random = _.random(1, 9999)
    }

    return random
  }

  saveTask (e) {
    e.preventDefault();
    const taskText = this.state.taskText

    if (_.trim(taskText) && _.isNull(this.state.edit)) {
      this.setState((prevState) => {
        prevState.taskList.push({
          id: this.generateId(),
          text: taskText,
          isDone: false
        })

        return {
          taskList: prevState.taskList
        }
      })
      
      this.setState({
        taskText: ''
      })
    } else if (!_.isNull(this.state.edit)) {
      this.setState((prevState) => {
        const newText = this.state.taskText
        for (let task of prevState.taskList) {
          if (task.id === this.state.edit) {
            task.text = newText
          }
        }

        return {
          taskList: prevState.taskList,
          taskText: '',
          edit: null
        }
      })
    }
  }

  editTask (id) {
    this.setState((prevState) => {

      return {
        edit: id,
        taskText: _.find(prevState.taskList, { id: id })
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row pt-3 pb-2" id="App-header">
          <div className="col-12 text-center text-light">
            <h1 className="fa fa-clipboard-list"></h1>
            <h5>ReacTodo</h5>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-4 col-lg-4">
            <form onSubmit={() => {return false}}>
              <div className="form-group">
                <label className="font-weight-bold">Add new:</label>
                <input type="text" className="form-control" aria-describedby="addNewHelp" value={this.state.taskText} onChange={this.handleInputChange}></input>
                <small id="addNewHelp" className="form-text text-muted">Add new Todo entry</small>
              </div>
              <button className="btn btn-primary float-right" disabled={!_.trim(this.state.taskText)} onClick={this.saveTask}><span className="fa fa-plus"></span>{ _.isNull(this.state.edit) ? 'Add' : 'Update' }</button>
            </form>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 offset-md-2 col-md-8 offset-lg-4 col-lg-4">
            {this.state.taskList.length ? <TodoList data={this.state.taskList} updateTask={this.editTask}/> : <strong>You don't add any tasks yet.</strong>}
          </div>
        </div>
      </div>
    );
  }
}

export default App
