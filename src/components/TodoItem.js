import React, { PropTypes } from 'react'

const TodoItem = (props) => {
  const handleClick = () => {
    props.toggleTodo(props.id)
  }
  const handleClickDelete = () => {
    props.deleteTodo(props.id)
  }
  return (
    <li ><div><p className={props.complete ? 'complete' : null} onClick={handleClick}>{ props.text }</p>
    <button onClick={handleClickDelete}>delete</button></div>
    </li>  // eslint-disable-line
  )
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoItem
