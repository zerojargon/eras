import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { seo } from '../../../actions'

import { Category } from '../../../components/templates/SEO'

class SeoCategoryContainer extends Component {

  constructor() {
    super()

  }

  componentWillMount() {
    this.props.getCategory(this.props.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) return this.props.getCategory(nextProps.params.id)
  }


  render() {
    return (
      <Category category={this.props.category} products={this.props.category.product} />
    )
  }

}

function mapStateToProps(state) {
  const { category } = state.seo
  return {
    category
  }
}

function mapDispatchToProps(dispatch) {
  return {

    getCategory: (id) => {
      return dispatch(seo.getCategory(id))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeoCategoryContainer)
