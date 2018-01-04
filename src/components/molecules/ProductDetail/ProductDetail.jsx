import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from '../'
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import Lightbox from 'react-images';

export default class ProductDetail extends Component {

  constructor() {
    super()
    this.state = {
      selectedImage: null,
      currentImage: 0,
      isLightBoxOpen: false
    }
    
    this.toggleLightBox = this.toggleLightBox.bind(this)
    this.prevImage = this.prevImage.bind(this)
    this.nextImage = this.nextImage.bind(this)
  }

  selectImage(id, index) {
    this.setState({ 
      selectedImage: id,
      currentImage: index
    })
  }

  toggleLightBox() {
    this.setState({
      isLightBoxOpen: !this.state.isLightBoxOpen
    })
  }

  prevImage() {
    this.setState({
      currentImage: --this.state.currentImage
    })
  }

  nextImage() {
    this.setState({
      currentImage: ++this.state.currentImage
    })
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
                  <div key={key} onClick={this.selectImage.bind(this, image.id, key)}>
                    <img
                      src={image.meta.resourceUrl}
                      className='img-responsive center-block cursor-pointer'
                      alt={`${product.name} Product Image Thumbnail`}
                    />
                  </div>
                )
              })}
              <Lightbox
                images={product.image.map(image => ({
                  src: image.meta.resourceUrl
                }))}
                currentImage={this.state.currentImage || 0}
                isOpen={this.state.isLightBoxOpen}
                onClickPrev={this.prevImage}
                onClickNext={this.nextImage}
                onClose={this.toggleLightBox}
              />

            </Col>
            <Col sm={9}>
              {!imageToDisplay && primaryImage &&
                <img 
                  src={primaryImage.meta.resourceUrl}
                  className='img-responsive center-block cursor-pointer'
                  alt={`${product.name} Main Product Image`}
                  onClick={this.toggleLightBox}
                />
              }
              {imageToDisplay &&
                <img 
                  src={imageToDisplay.meta.resourceUrl}
                  className='img-responsive center-block cursor-pointer'
                  alt={`${product.name} Product Image`}
                  onClick={this.toggleLightBox}
                />
              }
            </Col>
          </Row>
        </Col>
        <Link to={`/contact-us?subject=${product.name}&productId=${product.name}(${product.stockCode})`}>Enquire about this antique</Link>
      </Row>
    )
  }

}
