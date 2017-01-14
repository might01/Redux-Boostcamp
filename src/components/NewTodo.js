import React, { Component, PropTypes } from 'react'

class NewTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.addHandler = this.addHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  addHandler() {
    this.props.addTodo(this.state.text)
    this.setState({
      text: '',
    })
  }

  changeHandler(event) {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.changeHandler} value={this.state.text} />
        <button onClick={this.addHandler}>Add</button>
      </div>
    )
  }
}

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default NewTodo
