import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, Button, FormControl, Glyphicon } from 'react-bootstrap'
import navigate from '../../../services/navigator'

export default class HeaderSEO extends Component {

  navigateTo(path) {
    return navigate(path)
  }

  static propTypes = {
    categories: PropTypes.array.isRequired
  }

  render() {
    const styles = {
      marginBottom: '25px'
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
              <NavItem onSelect={this.navigateTo.bind(this, "")} >Home</NavItem>
              <NavDropdown eventKey={3} title="Stock" id="basic-nav-dropdown">
                {this.props.categories.map((category, key) => {
                  return (
                    <MenuItem key={key} onSelect={this.navigateTo.bind(this, `categories/${category.id}`)}>{category.name}</MenuItem>
                  )
                })}
              </NavDropdown>
              <NavItem onSelect={this.navigateTo.bind(this, "about-us")} >About Us</NavItem>
              <NavItem onSelect={this.navigateTo.bind(this, "contact-us")} >Contact Us</NavItem>
            </Nav>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
              {' '}
              <Button type="submit"><Glyphicon glyph="search" /></Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }

}
