import React, { Component, PropTypes } from 'react'
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
