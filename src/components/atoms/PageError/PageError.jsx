import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-bootstrap'

export default class PageError extends Component {

  static propTypes = {
    error: PropTypes.string
  }

  render() {
    if (!this.props.error) return null

    return (
      <Alert bsStyle="danger">
        <strong>Whoops!</strong> {this.props.error}
      </Alert>
    )
  }
}
