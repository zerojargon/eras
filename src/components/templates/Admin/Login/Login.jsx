import React, { Component, PropTypes } from 'react'

import { Button, Panel, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

export default class Login extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    handleLoginChange: PropTypes.func.isRequired,
    loginDetails: PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    return (
      <div className="t-login">
        <h1>Login</h1>
        <form onSubmit={this.props.login}>
          <FormGroup controlId="email">
            <ControlLabel>Email:</ControlLabel>
            <FormControl
              type="text"
              placeholder="Your email address"
              value={this.props.loginDetails.email}
              onChange={this.props.handleLoginChange}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <ControlLabel>Password:</ControlLabel>
            <FormControl
              type="password"
              placeholder="Your password"
              value={this.props.loginDetails.password}
              onChange={this.props.handleLoginChange}
            />
          </FormGroup>
          <Button bsStyle="success" type="submit">Login</Button>
        </form>
      </div>
    )
  }

}
