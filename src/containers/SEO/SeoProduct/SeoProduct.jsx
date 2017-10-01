import React, { Component } from 'react'
import { connect } from 'react-redux'

import { seo } from '../../../actions'

import { Product } from '../../../components/templates/SEO'

class SeoProductContainer extends Component {

  constructor() {
    super()


  }

  componentWillMount() {
    this.props.getProduct(this.props.params.id)
  }

  render() {
    return (
      <Product
        product={this.props.product}
      />
    )
  }

}

function mapStateToProps(state) {
  const { product } = state.seo
  return {
    product
  }
}

function mapDispatchToProps(dispatch) {
  return {

    getProduct: (id) => {
      return dispatch(seo.getProduct(id))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeoProductContainer)
