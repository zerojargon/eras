import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Panel, Button } from 'react-bootstrap'
import { ProductTile } from '../../../molecules'
import navigate from '../../../../services/navigator'

export default class ProductList extends Component {

  static propTypes = {
  }

  navigate(id) {
    return navigate(`products/${id}`)
  }

  render() {
    return (
      <Row>
        {this.props.products.map((product, key) => {
          return (
            <Col sm={3} key={key}>
              <Panel onClick={this.navigate.bind(null, product.id)} className="cursor-pointer">
                <ProductTile product={product} />
              </Panel>
            </Col>
          )
        })}
      </Row>
    )
  }

}
