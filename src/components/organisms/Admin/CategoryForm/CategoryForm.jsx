import React, { Component, PropTypes } from 'react'
import { Button, Panel, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'


export default class ProductForm extends Component {

  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    category: PropTypes.object
  }

  render() {


    const styles = {
    }

    return (
      <div style={styles}>
        <FormGroup controlId="name">
          <ControlLabel>Name:</ControlLabel>
          <FormControl
            type="text"
            placeholder="Category name"
            onChange={this.props.handleChange}
            value={this.props.category.name}
          />
        </FormGroup>
      </div>
    )
  }

}
