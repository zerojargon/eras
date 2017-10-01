import { request } from '../services/request'
import navigate from '../services/navigator'


const products = {

  getCategories: () => {
    return (dispatch) => {
      dispatch({
        type: 'SEO_GET_CATEGORIES',
        promise: () => new Promise((resolve, reject) => {
          request
            .get('/categories')
            .end((error, response) => {
              if (error) return reject(response.body.message)

              return resolve(response.body.data)
            })
        }),
        noCache: true
      })
    }
  },

  getCategory: (id) => {
    return (dispatch) => {
      dispatch({
        type: 'SEO_GET_CATEGORY',
        promise: () => new Promise((resolve, reject) => {
          request
          .get(`/categories/${id}`)
          .query('include=product.image')
          .end((error, response) => {
            if (error) return reject(response.body.message)
            return resolve(response.body)
          })
        }),
        noCache: true
      })
    }
  },

  getProducts: () => {
    return (dispatch) => {
      dispatch({
        type: 'SEO_GET_PRODUCTS',
        promise: () => new Promise((resolve, reject) => {
          request
          .get('/products')
          .query('include=image,category')
          .end((error, response) => {
            if (error) return reject(response.body.message)
            return resolve(response.body.data)
          })
        }),
        noCache: true
      })
    }
  },

  getProduct: (id) => {
    return (dispatch) => {
      dispatch({
        type: 'SEO_GET_PRODUCT',
        promise: () => new Promise((resolve, reject) => {
          request
          .get(`/products/${id}`)
          .query('include=category,image')
          .end((error, response) => {
            if (error) return reject(response.body.message)
            return resolve(response.body)
          })
        }),
        noCache: true
      })
    }
  },

  populateForm: (values) => {
    return (dispatch) => {
      dispatch({ type: 'SEO_POPULATE_CONTACT_FORM', values })
    }
  },

  submitContactForm: (values) => {
    return (dispatch) => {
      dispatch({
        type: 'SEO_SEND_ENQUIRY',
        promise: () => new Promise((resolve, reject) => {
          request
          .post(`/enquiries`)
          .send(values)
          .end((error, response) => {
            if (error) return reject(response.body.message)
            return resolve()
          })
        }),
      })
    }
  },

}

export default products
