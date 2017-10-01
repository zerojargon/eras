import React, { Component, PropTypes } from 'react'

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
          <img src={productImage.meta.resourceUrl} className='img-responsive' />
        }
        <h3>{product.name}</h3>
        <p>£{product.price}</p>
      </div>
    )
  }

}
