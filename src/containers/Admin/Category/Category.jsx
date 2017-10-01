import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createFilter } from 'react-search-input'

import { categories } from '../../../actions'

import { Category } from '../../../components/templates/Admin/Categories'


class CategoryContainer extends Component {

  componentDidMount() {
    const { id } = this.props.params

    if(id) {
      this.props.getById(id)
    }

    if(id == 'new') {
      this.props.clearCurrentCategory()
    }

  }

  render() {
    return (
      <Category category={this.props.category} handleChange={this.props.updateCurrentCategory} createCategory={this.props.createCategory} updateCategory={this.props.updateCategory} />
    )
  }

}

function mapStateToProps(state) {
  const { categories } = state
  return {
    category: categories.currentCategory
  }
}

function mapDispatchToProps(dispatch) {
  return {

    getById: (id) => {
      return dispatch(categories.getById(id))
    },

    clearCurrentCategory: () => {
      return dispatch(categories.clearCurrentCategory())
    },

    updateCurrentCategory: (e) => {
      const { id, value } = e.target
      return dispatch(categories.updateCurrentCategory(id, value))
    },

    createCategory: () => {
      return dispatch(categories.createCategory())
    },

    updateCategory: () => {
      return dispatch(categories.updateCategory())
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)
