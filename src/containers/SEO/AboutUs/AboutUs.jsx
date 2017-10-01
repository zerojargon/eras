import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { AboutUs } from '../../../components/templates/SEO'

import { seo } from '../../../actions'

class AboutUsContainer extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <AboutUs />
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsContainer)
