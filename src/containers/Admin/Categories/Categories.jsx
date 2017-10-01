import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createFilter } from 'react-search-input'

import { categories } from '../../../actions'

import { Categories } from '../../../components/templates/Admin/Categories'

const KEYS_TO_FILTER = ['id', 'name']

class CategoriesContainer extends Component {

  constructor() {
    super()

    this.state = {
      searchTerm: ''
    }

    this.updateSearchTerm = this.updateSearchTerm.bind(this)
  }

  componentDidMount() {
    this.props.getCategories()
  }

  updateSearchTerm(e) {
    const { value } = e.target

    this.setState({searchTerm: value})
  }

  render() {
    const filteredCategories = this.props.categories.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTER))
    return (
      <Categories
        updateSearchTerm={this.updateSearchTerm}
        deleteCategory={this.props.deleteCategory}

        categories={filteredCategories}
      />
    )
  }

}

function mapStateToProps(state) {
  const { categories } = state
  return {
    categories: categories.data
  }
}

function mapDispatchToProps(dispatch) {
  return {

    getCategories: () => {
      return dispatch(categories.get())
    },

    deleteCategory: (id) => {
      return dispatch(categories.delete(id))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)
