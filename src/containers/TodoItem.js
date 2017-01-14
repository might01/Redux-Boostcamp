import { connect } from 'react-redux'
import TodoItem from '../components/TodoItem'
import { toggleTodo } from '../actions/todo'

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
})
export default connect(null, mapDispatchToProps)(TodoItem)
