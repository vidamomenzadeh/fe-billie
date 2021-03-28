import React from 'react'

import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware} from 'redux'
import './index.css'
import LayoutCmp from './components/LayoutCmp'
import CustomersList from './components/customers/List'
import rootSaga from './sagas'
import rootReducer from './reducers'
import {logger} from 'redux-logger'
import {render} from 'react-dom'
import ThemeProvider from './style/theme'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <ThemeProvider>
      <LayoutCmp>
        <CustomersList />
      </LayoutCmp>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
