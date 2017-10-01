import React, { Component, PropTypes } from 'react'
import { Table as BootstrapTable } from 'react-bootstrap'

import { Loading } from '../../atoms'

export default class Table extends Component {

  static propTypes = {
    headings: PropTypes.array.isRequired,
    loading: PropTypes.bool
  }

  render() {

    if (this.props.loading) {
      return (
        <Loading />
      )
    }

    return (
      <BootstrapTable striped bordered hover>
        <thead>
          <tr>
            {
              this.props.headings.map((heading, key) => {
                return (<th key={key}>{heading}</th>)
              })
            }
          </tr>
        </thead>

        <tbody>
          {this.props.data}
        </tbody>
      </BootstrapTable>
    )
  }

}
