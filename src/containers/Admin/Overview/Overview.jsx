import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Overview } from '../../../components/templates/Admin'

import { bookings } from '../../../actions'

class OverviewContainer extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Overview
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer)
