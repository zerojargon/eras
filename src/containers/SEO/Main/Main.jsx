import React, { Component } from 'react'
import { connect } from 'react-redux'

import { seo } from '../../../actions'

import { HeaderSEO, Footer } from '../../../components/molecules'

class MainContainer extends Component {

  constructor() {
    super()

  }

  componentWillMount() {
    this.props.getMenuCategories()
  }


  render() {
    return (
      <div>
        <HeaderSEO categories={this.props.categories} />
        {this.props.children}
        <Footer />
      </div>
    )
  }

}

function mapStateToProps(state) {
  const { categories } = state.seo
  return {
    categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMenuCategories: () => {
      return dispatch(seo.getCategories())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
