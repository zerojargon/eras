import React, { Component, PropTypes } from 'react'

import { SearchField } from '../../../atoms'
import { Table } from '../../../molecules'
import navigate from '../../../../services/navigator'
import { Button } from 'react-bootstrap'

export default class Categories extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
  }

  render() {

    const tableHeadings = ['Id', 'Name', 'Actions']
    const tableData = this.props.categories.map((category, index) => {
      return (
        <tr key={index}>
          <td>{category.id}</td>
          <td>{category.name}</td>
          <td className="text-center">
            <Button bsStyle="warning" onClick={() => { navigate(`admin/categories/${category.id}`) }}>Edit</Button>
            <Button bsStyle="danger" onClick={this.props.deleteCategory.bind(this, category.id)}>Delete</Button>
          </td>
        </tr>
      )
    })

    return (
      <div className="t-categories">
        <h1>Categories</h1>
        <Button bsStyle="success" onClick={() => { navigate('admin/categories/new') }}>Create Category</Button>
        <p>Search by id or name</p>
        <SearchField onChange={this.props.updateSearchTerm} />
        <Table headings={tableHeadings} data={tableData} />
      </div>
    )
  }

}
