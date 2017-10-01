import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createFilter } from 'react-search-input'

import { products, categories } from '../../../actions'

import { Product } from '../../../components/templates/Admin/Products'


class ProductContainer extends Component {

  componentDidMount() {
    const { id } = this.props.params

    if(id) {
      this.props.getById(id)
    } else {
      this.props.clearCurrentProduct()
    }


    this.props.getCategories()
  }

  componentWillReceiveProps(nextProps) {
    const { id } = nextProps.params

    if(id !== this.props.params.id) {
      this.props.getById(id)
    }

  }


  render() {
    return (
      <Product
        product={this.props.product}
        categories={this.props.categories}
        stage={this.props.stage}

        handleImageUpload={this.props.handleImageUpload}
        uploadImages={this.props.uploadImages}

        makePrimaryImage={this.props.makePrimaryImage}
        deleteImage={this.props.deleteImage}

        createProduct={this.props.createProduct}
        updateProduct={this.props.updateProduct}
        togglePublish={this.props.togglePublish}
      />
    )
  }

}

function mapStateToProps(state) {
  const { products, categories } = state
  return {
    product: products.currentProduct,
    categories: categories.data,
    stage: products.stage
  }
}

function mapDispatchToProps(dispatch) {
  return {

    getById: (id) => {
      return dispatch(products.getById(id))
    },

    clearCurrentProduct: () => {
      return dispatch(products.clearCurrentProduct())
    },

    createProduct: (values) => {
      return dispatch(products.createProduct(values))
    },

    updateProduct: (values) => {
      return dispatch(products.updateProduct(values))
    },

    handleImageUpload: (images) => {
      return dispatch(products.handleImageUpload(images))
    },

    uploadImages: () => {
      return dispatch(products.uploadImages())
    },

    getCategories: () => {
      return dispatch(categories.get())
    },

    makePrimaryImage: (id) => {
      return dispatch(products.makePrimaryImage(id))
    },

    deleteImage: (id) => {
      return dispatch(products.deleteImage(id))
    },

    togglePublish: () => {
      return dispatch(products.togglePublish())
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
