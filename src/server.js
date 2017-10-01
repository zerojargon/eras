/* eslint-disable no-console */
require('isomorphic-fetch')
global.__SERVER__ = true

import React from 'react'
import serialize from 'serialize-javascript'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, RouterContext, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router } from 'express'
import express from 'services/express'
import routes from 'routes'
import configureStore from './store'
import config from './config'
import Html from 'components/Html'
import { setToken } from './services/request'
const { env, port, ip } = config

const router = new Router()

const isomorphicRender = (res, store, content) => {
  const initialState = store.getState()
  const assets = global.webpackIsomorphicTools.assets()
  const state = `window.__INITIAL_STATE__ = ${serialize(initialState)}`
  const markup = <Html {...{ assets, state, content }} />
  const doctype = '<!doctype html>\n'
  const html = renderToStaticMarkup(markup)

  res.send(doctype + html)
}

router.use((req, res, next) => {
  if (env === 'development') {
    global.webpackIsomorphicTools.refresh()
  }

  const memoryHistory = createMemoryHistory(req.url)
  const store = configureStore({}, memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)

  let cookie = null
  try {
    cookie = JSON.parse(req.headers.cookie)
  } catch(e) {
    console.log('User cookie not set.')
  }

  if (cookie) {
    store.dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: cookie
    })
    setToken(cookie.token)
  }

  const render = (store, renderProps) => {
    const app = (
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    )

    store.renderUniversal(renderToString, app)

      .then(({ output }) => {
        isomorphicRender(res, store, output);
      })

      .catch(({ output, error }) => {
        console.warn(error.message);
        isomorphicRender(res, store, output);
      });
  }

  const routing = routes(store)
  match({ history, routes: routing, location: req.url }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) res.redirect(redirectLocation.pathname + redirectLocation.search)
    if (error || !renderProps) return next(error)

    render(configureStore(store.getState(), memoryHistory), renderProps)
  })
})

const app = express(router)
app.listen(port, (error) => {
  if (error) return console.error(error)
  console.info(`Listening on http://${ip}:${port}`)
  console.log(`Server Environment: ${env}`)
})

export default app
