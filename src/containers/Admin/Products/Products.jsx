import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createFilter } from 'react-search-input'

import { products } from '../../../actions'

import { Products } from '../../../components/templates/Admin/Products'

const KEYS_TO_FILTER = ['name', 'stockCode', 'description']

class ProductsContainer extends Component {

  constructor() {
    super()

    this.state = {
      searchTerm: ''
    }

    this.updateSearchTerm = this.updateSearchTerm.bind(this)
  }

  componentDidMount() {
    this.props.getProducts()
  }

  updateSearchTerm(e) {
    const { value } = e.target

    this.setState({searchTerm: value})
  }

  render() {
    const filteredProducts = this.props.products.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTER))
    return (
      <Products
        updateSearchTerm={this.updateSearchTerm}
        deleteProduct={this.props.deleteProduct}

        products={filteredProducts}
      />
    )
  }

}

function mapStateToProps(state) {
  const { products } = state
  return {
    products: products.data
  }
}

function mapDispatchToProps(dispatch) {
  return {

    getProducts: () => {
      return dispatch(products.get())
    },

    deleteProduct: (id) => {
      return dispatch(products.delete(id))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
