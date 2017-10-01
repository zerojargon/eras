import React, { Component, PropTypes } from 'react'
import { Button, Panel, FormGroup, ControlLabel, FormControl, Col, Row, Checkbox } from 'react-bootstrap'
import Dropzone from 'react-dropzone'

export default class ProductForm extends Component {

  static propTypes = {
    product: PropTypes.object
  }

  render() {
    const { product } = this.props
    return (
      <div>
        <Row>
          <Col sm={6}>
            <h1 style={{marginTop: 0}}>Upload Images</h1>
          </Col>
          <Col sm={6} className="text-right">
            <Button bsStyle="success" onClick={this.props.uploadImages}>Image Management & Complete</Button>
          </Col>
        </Row>
        <FormGroup>
          <p><strong>Images:</strong></p>
          <Dropzone onDrop={this.props.handleImageUpload} accept="image/*">
            <div>Click to upload, or drag some image files here.</div>
          </Dropzone>
        </FormGroup>

        {product.images && product.images.length > 0 &&
          <FormGroup>
            <span>Images to be uploaded:</span>
            <Row>
              {product.images.map((image, index) => {
                return (
                  <Col sm={3} key={index} style={{marginBottom: '20px'}}>
                    <img src={image.preview} className="img-responsive" />
                  </Col>
                )
              })}
            </Row>
          </FormGroup>
        }

        {product.image && product.image.length > 0 &&
          <FormGroup>
            <span>Existing images:</span>
            <Row>
              {product.image.map((image, index) => {
                return (
                  <Col sm={3} key={index} style={{marginBottom: '20px'}}>
                    <img src={image.meta.resourceUrl} className="img-responsive" />
                  </Col>
                )
              })}
            </Row>
          </FormGroup>
        }

      </div>
    )
  }

}
