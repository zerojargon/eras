import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Contact } from '../../../components/templates/SEO'

import { seo } from '../../../actions'

class ContactContainer extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    if(this.props.location.query) this.props.populateForm(this.props.location.query)
  }

  render() {
    return (
      <Contact
        onSubmit={this.props.onSubmit}
      />
    )
  }

}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit(values) {
      return dispatch(seo.submitContactForm(values))
    },
    populateForm(values) {
      return dispatch(seo.populateForm(values))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)
