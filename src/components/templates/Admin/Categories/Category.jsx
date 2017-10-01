import React, { Component, PropTypes } from 'react'

import { CategoryForm } from '../../../organisms/Admin'
import { Button } from 'react-bootstrap'

export default class Category extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
  }

  render() {
    const formAction = this.props.category.id ? this.props.updateCategory : this.props.createCategory
    return (
      <form onSubmit={formAction}>
        <CategoryForm category={this.props.category} handleChange={this.props.handleChange} />
        <Button bsStyle="success" type="submit">Save</Button>
      </form>
    )
  }

}
