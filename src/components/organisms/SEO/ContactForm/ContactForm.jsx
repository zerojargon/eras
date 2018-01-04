import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Button, Glyphicon, FormGroup, ControlLabel } from 'react-bootstrap'
import { Input } from '../../../atoms'

class ContactForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Field
          component={Input}
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          label="Subject:"
        />

        <Field
          component={Input}
          type="text"
          name="productId"
          id="productId"
          placeholder="Product Code / Name"
          label="Product Code / Name:"
        />

        <Field
          component={Input}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email Address"
          label="Email:"
          required
        />

        <Field
          component={Input}
          type="number"
          name="phone"
          id="phone"
          placeholder="Your Telephone Number"
          label="Telephone:"
        />

        <Field
          component={Input}
          type="textarea"
          name="message"
          id="message"
          placeholder="Your Message"
          label="Message:"
        />
        
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
