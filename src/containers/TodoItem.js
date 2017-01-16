import { connect } from 'react-redux'
import TodoItem from '../components/TodoItem'
import { toggleTodo,deleteTodo } from '../actions/todo'

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})
export default connect(null, mapDispatchToProps)(TodoItem)
