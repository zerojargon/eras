import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import user from './user'
import categories from './categories'
import products from './products'
import seo from './seo'
import app from './app'
import timestamps from './timestamps'

const reducers = {
  form,
  routing,
  timestamps,
  user,
  categories,
  products,
  app,
  seo
}

export default combineReducers(reducers)
