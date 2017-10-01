import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'react-bootstrap'

export default class AboutUs extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
  }

  render() {
    return (
      <Grid className="t-about-us">
        <p>Some description about Eras of Style etc</p>
      </Grid>
    )
  }

}
