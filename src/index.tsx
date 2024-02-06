import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { App } from './components'
import { reducers } from './store/reducers'

const store = createStore(reducers, applyMiddleware(thunk))

const el = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(el!)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()