import React, { Component, PropTypes } from 'react'
import { Row, Col, FormGroup, FormControl } from 'react-bootstrap'

export default class SearchField extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <FormGroup>
            <FormControl type="text" placeholder="Search" onChange={this.props.onChange} />
          </FormGroup>
        </Col>
      </Row>
    )
  }

}
