import './index.css';
import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { selectSubreddit, fetchPosts } from './redux/actions'
import rootReducer from './redux/reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

store.dispatch(selectSubreddit('reactjs'))
//store.dispatch(fetchPosts('reactjs')).then(() => console.log(store.getState()))
store
    .dispatch(fetchPostsIfNeeded('reactjs'))
    .then(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);