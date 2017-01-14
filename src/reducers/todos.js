import { ADD_TODO, TOGGLE_TODO } from '../actions/types'

const initialState = []
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const todo = {
        id: state.length + 1,
        text: action.payload.text,
        complete: false,
      }
      return [
        ...state,
        todo,
      ]
    }
    case TOGGLE_TODO: {
      return state.map(todo =>
        (todo.id === action.payload.id)
          ? { id: todo.id, text: todo.text, complete: !todo.complete }
          : todo
      )
    }
    default: {
      return state
    }
  }
}

export default todosReducer
