import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import Gallery from './components/Gallery'
import reducer from './reducers'

import {watchLoadImages} from './sagas';

const store = createStore(
  reducer,
  applyMiddleware(createSagaMiddleware(watchLoadImages))
);

ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
);
