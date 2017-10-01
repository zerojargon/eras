import React, { Component, PropTypes } from 'react'
import { ProductList } from '../../../organisms/SEO'
import { Grid } from 'react-bootstrap'

export default class Home extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
  }

  render() {
    return (
      <Grid className="t-home">
        <ProductList products={this.props.products} />
      </Grid>
    )
  }

}
