import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button, Panel, FormGroup, ControlLabel, Col, Row, Checkbox } from 'react-bootstrap'
import { reduxForm, Field } from 'redux-form'
import { Input, Select } from 'components/atoms'

class ProductForm extends Component {
  static propTypes = {
    product: PropTypes.object
  }

  render() {
    const { product, categories } = this.props
    console.log(this.props.initialValues)
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>

        <Row>
          <Col sm={6}>
            <FormGroup>
              <ControlLabel>Name:</ControlLabel>
              <Field
                component={Input}
                type="text"
                placeholder="Product name"
                name="name"
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Description:</ControlLabel>
              <Field
                type="textarea"
                component={Input}
                placeholder="Description"
                name="description"
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Category:</ControlLabel>
              <Field
                placeholder="Select Category"
                name="categoryIds"
                component={Select}
                multiple
              >
                <option disabled>Select Category</option>
                {categories.map((category, key) => {
                  return <option key={key} value={category.id}>{category.name}</option>
                })}
              </Field>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Stock Code:</ControlLabel>
              <Field
                component={Input}
                type="text"
                placeholder="Stock code"
                name="stockCode"
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Price:</ControlLabel>
              <Field
                component={Input}
                type="text"
                placeholder="Price"
                name="price"
              />
            </FormGroup>
          </Col>

          <Col sm={6}>
            <FormGroup>
              <ControlLabel>Discounted Price:</ControlLabel>
              <Field
                component={Input}
                type="text"
                placeholder="Discounted Price"
                name="discountedPrice"
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Width:</ControlLabel>
              <Field
                component={Input}
                type="text"
                placeholder="Width"
                name="width"
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Height:</ControlLabel>
              <Field
                component={Input}
                type="text"
                placeholder="Height"
                name="height"
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Depth:</ControlLabel>
              <Field
                component={Input}
                type="text"
                placeholder="Depth"
                name="depth"
              />
            </FormGroup>
          </Col>
        </Row>

        {!product.publishedAt &&
          <FormGroup>
            <Field
              name="publish"
              type="checkbox"
              component="input"
            />
            Publish on save?
          </FormGroup>
        }

        <Button type="submit" bsStyle="success">Finish and add images</Button>

      </form>
    )
  }
}

ProductForm = reduxForm({
  form: 'productForm',
  enableReinitialize: true
})(ProductForm)

ProductForm = connect(state => {
  return {
    initialValues: state.products.currentProduct
  }
}, null)(ProductForm)

export default ProductForm
