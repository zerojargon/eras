import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Home } from '../../../components/templates/SEO'

import { seo } from '../../../actions'

class HomeContainer extends Component {

  constructor() {
    super()

  }

  componentWillMount() {
    this.props.getProducts()
  }


  render() {
    return (
      <Home products={this.props.products} />
    )
  }

}

function mapStateToProps(state) {
  const { products } = state.seo
  return {
    products
  }
}

function mapDispatchToProps(dispatch) {
  return {

    getProducts: () => {
      return dispatch(seo.getProducts())
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
