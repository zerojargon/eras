import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { SearchField } from '../../../atoms'
import { Table } from '../../../molecules'
import navigate from '../../../../services/navigator'
import { Button, ButtonGroup } from 'react-bootstrap'
import config from '../../../../config'

export default class Products extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
  }

  render() {

    const tableHeadings = ['Stock Code', 'Image', 'Name', 'Actions']
    const tableData = this.props.products.map((product, index) => {
      const image = product.primaryImageId ? `${config.API_URL}/images/${product.primaryImageId}` : false
      return (
        <tr key={index}>
          <td>{product.stockCode}</td>
          {image &&
            <td><img src={image} className="img-responsive"/></td>
          }
          {!image &&
            <td><small>No Image</small></td>
          }
          <td>{product.name}</td>
          <td className="text-center">
            <ButtonGroup>
              <Button bsStyle="warning" onClick={() => { navigate(`admin/products/${product.id}`) }}>Edit</Button>
              <Button bsStyle="danger" onClick={this.props.deleteProduct.bind(this, product.id)}>Delete</Button>
            </ButtonGroup>
          </td>
        </tr>
      )
    })

    return (
      <div className="t-products">
        <h1>Products</h1>
        <Button bsStyle="success" onClick={() => { navigate('admin/products/new') }}>Create Product</Button>
        <p>Search by stock code, name or description</p>
        <SearchField onChange={this.props.updateSearchTerm} />
        <Table headings={tableHeadings} data={tableData} />
      </div>
    )
  }

}
