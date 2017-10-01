import React from 'react'

// containers
// Admin
import Dashboard from './containers/Admin/Dashboard'
import Overview from './containers/Admin/Overview'
import Login from './containers/Admin/Login'
import Categories from './containers/Admin/Categories'
import Category from './containers/Admin/Category'
import Products from './containers/Admin/Products'
import Product from './containers/Admin/Product'

// SEO
import Main from './containers/SEO/Main'
import Home from './containers/SEO/Home'
import AboutUs from './containers/SEO/AboutUs'
import Contact from './containers/SEO/Contact'
import SeoProduct from './containers/SEO/SeoProduct'
import SeoCategory from './containers/SEO/SeoCategory'



const getRoutes = ({dispatch, getState}) => {

  const checkAuth = (nextState, replace) => {
    const authenticated = getState().user.authenticated
    const path = nextState.location.pathname

    if (path === '/admin/login' && !authenticated) return
    if (path === '/admin/login' && authenticated) return replace('/admin/products')
    if (!authenticated) return replace('/admin/login')
  }

  const routes = [
    {
      path: '/admin',
      component: Dashboard,
      onEnter: checkAuth,
      childRoutes: [
        { path: '', component: Overview, onEnter: checkAuth },
        { path: 'login', component: Login, onEnter: checkAuth },
        { path: 'products', component: Products, onEnter: checkAuth },
        { path: 'products/new', component: Product, onEnter: checkAuth },
        { path: 'products/:id', component: Product, onEnter: checkAuth },
        { path: 'categories', component: Categories, onEnter: checkAuth },
        { path: 'categories/new', component: Category, onEnter: checkAuth },
        { path: 'categories/:id', component: Category, onEnter: checkAuth }
      ]
    },
    {
      component: Main,
      childRoutes: [
        { path: '/', component: Home },
        { path: '/about-us', component: AboutUs },
        { path: '/contact-us', component: Contact },
        { path: 'categories/:id', component: SeoCategory },
        { path: 'products/:id', component: SeoProduct }
      ]
    }
  ]


  return routes
}


export default getRoutes
