import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
import reduxUniversal from 'redux-universal'
import thunk from 'redux-thunk'

import config from './config'

import actionCache from './libs/actionCache'
import actionResolver from './libs/actionResolver'
import reducers from './reducers'

const middlewareCreator = config.browser ? applyMiddleware : reduxUniversal

const configureStore = (initialState, history) => {

  const finalCreateStore = compose(
    middlewareCreator(thunk, routerMiddleware(history), actionCache, actionResolver),
    autoRehydrate(),
    config.browser && window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )(createStore)

  const store = finalCreateStore(reducers, initialState)
  if (config.browser) {
    persistStore(store, { blacklist: ['seo', 'app', 'routing', 'form'] }, () => {
      store.dispatch({ type: 'APP_READY' })
    })
  }

  return store
}

export default configureStore
