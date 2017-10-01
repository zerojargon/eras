import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import navigate from '../../../services/navigator'


export default class Header extends Component {

  navigateTo(path) {
    return navigate(path)
  }

  render() {
    const styles = {
      marginBottom: '50px'
    }

    return (
      <div style={styles}>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Eras of Style</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem onSelect={this.navigateTo.bind(this, "admin/categories")} >Categories</NavItem>
              <NavItem onSelect={this.navigateTo.bind(this, "admin/products")} >Products</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }

}
