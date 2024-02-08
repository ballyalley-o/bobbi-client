import React from 'react'
import ReactDOM from 'react-dom/client'
// @redux
import { createStore, applyMiddleware, Reducer } from 'redux'
import { Provider } from 'react-redux'
import { reducers } from './store/reducers'
import thunk from 'redux-thunk'
// @components
import { App } from './components'
import { IApiFetchAction } from './interfaces/api-fetch'

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
