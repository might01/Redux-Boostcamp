import { connect } from 'react-redux'
import NewTodo from '../components/NewTodo'
import { addTodo } from '../actions/todo'

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
})
export default connect(null, mapDispatchToProps)(NewTodo)
