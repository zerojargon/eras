import React, { Component, PropTypes } from 'react'
import { Button, Grid, Panel } from 'react-bootstrap'

import { ProductDetail } from '../../../molecules'

export default class Product extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid className="t-product">
        <Panel>
          <ProductDetail
            product={this.props.product}
          />
        </Panel>
      </Grid>
    )
  }

}
