import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button, Panel } from 'react-bootstrap'

export default class Overview extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
  }

  render() {
    return (
      <div className="t-overview">
        <h1>Overview</h1>
      </div>
    )
  }

}
