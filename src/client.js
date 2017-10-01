import './styles/main.scss'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { Router, browserHistory, applyRouterMiddleware, Redirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { useScroll } from 'react-router-scroll'

import configureStore from './store'
import routes from './routes'
import { setToken } from './services/request'

import Loading from './components/atoms/Loading'

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)
const root = document.getElementById('app')

const userToken = store.getState().user.token
if (userToken) setToken(userToken)
const routing = routes(store)

class App extends Component {
  render() {
    const applicationReady = this.props.app.ready
    if (!applicationReady) return ( <Loading /> )

    return (
      <Router history={history} routes={routing}>
        <Redirect from='*' to='/' />
      </Router>
    )
  }
}

const ConnectedApp = connect(mapStateToProps)(App)

function mapStateToProps(state) {
  const { app } = state

  return {
    app
  }
}


const renderApp = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)

render(renderApp(), root)
