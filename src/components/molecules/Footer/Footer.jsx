import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Well } from 'react-bootstrap'

export default class Footer extends Component {

  render() {
    const styles = {
      marginTop: '50px'
    }

    return (
      <div style={styles}>
        <Well>
          This is a <h1>footer</h1>
        </Well>
      </div>
    )
  }

}
