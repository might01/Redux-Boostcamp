import React, { PropTypes } from 'react'
import TodoItem from '../containers/TodoItem'

const TodoList = props => (
  <ul>
    {
      props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)
    }
  </ul>
)
TodoList.propTypes = {
  todos: PropTypes.arrayOf(React.PropTypes.object),
}
export default TodoList
