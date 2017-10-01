import React, { Component, PropTypes } from 'react'
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
              <Panel>
                <ProductTile product={product} />
                <Button bsStyle='success' onClick={this.navigate.bind(null, product.id)}>View</Button>
              </Panel>
            </Col>
          )
        })}
      </Row>
    )
  }

}
