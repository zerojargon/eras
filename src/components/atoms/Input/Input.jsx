import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

const Input = ({ input, meta, placeholder, type, label, id }) => (
  <FormGroup controlId={id || null}>
    {label && 
      <ControlLabel>
        {label}
      </ControlLabel>
    }
    <FormControl
      type={type}
      placeholder={placeholder}
      id={id}
      {...input}
    />
    {meta.touched && meta.error && <HelpBlock>{meta.error}</HelpBlock>}
    {meta.touched && meta.warning && <HelpBlock>{meta.warning}</HelpBlock>}
  </FormGroup>
)

export default Input
