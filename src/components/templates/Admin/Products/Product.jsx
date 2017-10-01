import React, { Component, PropTypes } from 'react'

import { ProductForm, ImageForm, ImageManagement } from '../../../organisms/Admin'
import { Button } from 'react-bootstrap'

export default class Product extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
  }

  render() {
    const formAction = this.props.product.id ? this.props.updateProduct : this.props.createProduct
    if (this.props.stage === 1) {
      return (
        <ProductForm
          product={this.props.product}
          categories={this.props.categories}
          onSubmit={formAction}
          togglePublish={this.props.togglePublish} />
      )
    } else if (this.props.stage === 2) {
      return (
        <ImageForm
          handleImageUpload={this.props.handleImageUpload}
          uploadImages={this.props.uploadImages}
          product={this.props.product} />
      )
    } else if (this.props.stage === 3) {
      return (
        <ImageManagement
          product={this.props.product}
          makePrimaryImage={this.props.makePrimaryImage}
          deleteImage={this.props.deleteImage}
        />
      )
    }
  }
}
