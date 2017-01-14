import React, { PropTypes } from 'react'

const TodoItem = (props) => {
  const handleClick = () => {
    props.toggleTodo(props.id)
  }
  return (
    <li className={props.complete ? 'complete' : null} onClick={handleClick}>{ props.text }</li>  // eslint-disable-line
  )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool,
  toggleTodo: PropTypes.func.isRequired,
}

export default TodoItem
