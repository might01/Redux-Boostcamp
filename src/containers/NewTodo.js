import { connect } from 'react-redux'
import NewTodo from '../components/NewTodo'
import { addTodo } from '../actions/todo'

const mapDispatchToProps = dispatch =>{ 
  console.log("mapDispatchToProps newTodo.js");
 return ({
  addTodo: (id,text) => dispatch(addTodo(id,text)),
})}
export default connect(null, mapDispatchToProps)(NewTodo)
