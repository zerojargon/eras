import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Login } from '../../../components/templates/Admin'

import { user } from '../../../actions'

class LoginContainer extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Login
          loginDetails={this.props.loginDetails}

          handleLoginChange={this.props.handleLoginChange}
          login={this.props.login}
        />
      </div>
    )
  }

}

function mapStateToProps(state) {
  const { user } = state
  return {
    loginDetails: user.loginDetails
  }
}

function mapDispatchToProps(dispatch) {
  return {

    login: (event) => {
      event.preventDefault()
      return dispatch(user.login())
    },

    handleLoginChange: (event) => {
      const { id, value } = event.target
      return dispatch(user.updateLoginDetails(id, value))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
