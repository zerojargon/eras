import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'

import Header from '../../../components/molecules/Header'

class DashboardContainer extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <Grid>
          {this.props.children}
        </Grid>
      </div>
    )
  }

}

function mapStateToProps(state) {

  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
