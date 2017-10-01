import React, { Component, PropTypes } from 'react'
import { Button, Grid, Row, Col, Alert } from 'react-bootstrap'

import { ProductList } from '../../../organisms/SEO'

export default class Category extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid className="t-category">
        <h1>{this.props.category.name}</h1>
        {!this.props.products.length &&
          <Alert bsStyle='danger'>
            <p><strong>Not found!</strong> There are currently no products available in this category.</p>
          </Alert>
        }
        <ProductList products={this.props.products} />
      </Grid>
    )
  }

}
