import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import App from './components/App'
import './style.css'

const preloadedState = {
  todos: [
    { id: "1", text: 'FIFA 17', complete: false },
    { id: "2", text: 'Feed Dog', complete: true },
  ],
}
const store = createStore(rootReducer, preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
)
