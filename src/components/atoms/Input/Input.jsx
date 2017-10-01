import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

const Input = ({ input, meta, placeholder, type }) => (
  <FormGroup>
    <FormControl
      type={type}
      placeholder={placeholder}
      {...input}
    />
    {meta.touched && meta.error && <HelpBlock>{meta.error}</HelpBlock>}
    {meta.touched && meta.warning && <HelpBlock>{meta.warning}</HelpBlock>}
  </FormGroup>
)

export default Input
