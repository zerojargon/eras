import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { Row, Col } from 'react-bootstrap'

export default class Loading extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} className="text-center">
          <h3>Loading!</h3>
          <FontAwesome spin name="refresh" size="4x" />
        </Col>
      </Row>
    )
  }
}
