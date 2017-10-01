import React, { Component, PropTypes } from 'react'
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'


export default class ImageManagement extends Component {

  static propTypes = {
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm={6}>
            <h1 style={{marginTop: 0}}>Manage Images</h1>
          </Col>
          <Col sm={6} className="text-right">
            <Link to="/admin/products">
              <Button bsStyle="success">Finish</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          {this.props.product.image.map((image, key) => {
            return (
              <Col sm={3} key={key} style={{marginBottom: '20px'}}>
                <img src={image.meta.resourceUrl} className="img-responsive" />
                <div className="text-center" style={{ marginTop: '20px'}}>
                  <ButtonGroup>
                    {(image.id !== this.props.product.primaryImageId) &&
                      <Button bsStyle="success" onClick={this.props.makePrimaryImage.bind(this, image.id)}>Make Primary</Button>
                    }
                    <Button bsStyle="danger" onClick={this.props.deleteImage.bind(this, image.id)}>Delete</Button>
                  </ButtonGroup>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }

}
