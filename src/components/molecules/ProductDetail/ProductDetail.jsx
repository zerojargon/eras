import React, { Component, PropTypes } from 'react'
import { Table } from '../'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'

export default class ProductDetail extends Component {

  constructor() {
    super()
    this.state = {
      selectedImage: null
    }
  }

  selectImage(id) {
    this.setState({ selectedImage: id })
  }

  static propTypes = {
  }

  render() {
    const { product } = this.props
    const primaryImage = product.image.find(image => image.id === product.primaryImageId)
    const imageToDisplay = this.state.selectedImage ? product.image.find(image => image.id === this.state.selectedImage) : null
    const tableHeadings = ['Width', 'Height', 'Depth']
    const tableData = (
      <tr>
        <td>{product.width}</td>
        <td>{product.height}</td>
        <td>{product.depth}</td>
      </tr>
    )

    return (
      <Row>
        <Col sm={7}>
          <h3>{product.name}</h3>
          <hr />
          <p>{product.description}</p>
          <p><strong>£{product.price}</strong></p>
          <Table data={tableData} headings={tableHeadings} />
        </Col>
        <Col sm={5}>
          <Row>
            <Col sm={3}>
              {product.image.map((image, key) => {
                return (
                  <div key={key} onClick={this.selectImage.bind(this, image.id)}>
                    <img
                      src={image.meta.resourceUrl}
                      className='img-responsive center-block'
                    />
                  </div>
                )
              })}
            </Col>
            <Col sm={9}>
              {!imageToDisplay && primaryImage &&
                <img src={primaryImage.meta.resourceUrl} className='img-responsive center-block' />
              }
              {imageToDisplay &&
                <img src={imageToDisplay.meta.resourceUrl} className='img-responsive center-block' />
              }
            </Col>
          </Row>
        </Col>
        <Link to={`/contact-us?subject=${product.name}&productId=${product.stockCode}`}>Enquire about this antique</Link>
      </Row>
    )
  }

}
