import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ProductTile extends Component {

  static propTypes = {
    product: PropTypes.object
  }

  render() {
    const { product } = this.props
    const productImage = product.image.find(image => image.id === product.primaryImageId)

    return (
      <div>
        {productImage &&
          <img
            src={productImage.meta.resourceUrl}
            className='img-responsive'
            alt={`${product.name} Main Product Image`}
          />
        }
        <h3>{product.name}</h3>
        <p>£{product.price}</p>
      </div>
    )
  }

}
