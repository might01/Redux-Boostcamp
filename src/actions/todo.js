import { ADD_TODO, TOGGLE_TODO,DELETE_TODO } from './types'

const addTodo = (id,text) => ({
  type: ADD_TODO,
  payload: {
    id,
    text, 
  },
})

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id, 
  },
})

const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id
  },
})


export {
  addTodo, // eslint-disable-line
  toggleTodo,
  deleteTodo,
}
