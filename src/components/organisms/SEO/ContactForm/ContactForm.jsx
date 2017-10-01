import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Button, Glyphicon } from 'react-bootstrap'
import { Input } from '../../../atoms'

class ContactForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Field component={Input} type="text" name="subject" placeholder="Subject"/>
        <Field component={Input} type="text" name="productId" placeholder="Product Code"/>
        <Field component={Input} type="email" name="email" placeholder="Your Email Address" required/>
        <Field component={Input} type="number" name="phone" placeholder="Your Telephone Number"/>
        <Field component={Input} type="textarea" name="message" placeholder="Your Message"/>
        <Button type="submit">Submit <Glyphicon glyph="send" /></Button>
      </form>
    )
  }
}

ContactForm = reduxForm({
  form: 'contact',
  enableReinitialize: true
})(ContactForm)

ContactForm = connect(
  state => {
    return {
      initialValues: state.seo.contactDetails
    }
  }
)(ContactForm)

export default ContactForm
