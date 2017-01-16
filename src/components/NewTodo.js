import React, { Component, PropTypes } from 'react'
import uuidV1 from 'uuid/v1'
class NewTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.addHandler = this.addHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.changeHandlerKey = this.changeHandlerKey.bind(this)
  }

  addHandler() {
    if(this.state.text.length !==0)
    {
      this.props.addTodo(uuidV1(),this.state.text)
      this.setState({
        text: '',
      })
    }
  }

  changeHandler(event) {
    this.setState({
      text: event.target.value,
    })
  }

  changeHandlerKey(event) {
    if(event.keyCode===13)
    {
      this.addHandler();
    }

  }

  render() {
    return (
      <div>
        <input onChange={this.changeHandler}  onKeyUp={this.changeHandlerKey} value={this.state.text} />
        <button onClick={this.addHandler}>Add</button>
      </div>
    )
  }
}

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default NewTodo
