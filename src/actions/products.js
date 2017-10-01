import { request } from '../services/request'
import navigate from '../services/navigator'


const products = {

  get: () => {
    return (dispatch) => {
      request
        .get('/products')
        .query('include=image,category&includeDrafts=true')
        .end((error, response) => {
          if (error) return dispatch({ type: 'GET_PRODUCTS_FAILURE', error: response.body.message })

          dispatch({ type: 'GET_PRODUCTS_SUCCESS', products: response.body.data })
        })
    }
  },

  getById: (id) => {
    return (dispatch) => {
      request
        .get(`/products/${id}`)
        .query('include=category,image')
        .end((error, response) => {
          if (error) return dispatch({ type: 'GET_PRODUCT_FAILURE', error: response.body.message })
          let product = {
            ...response.body,
            categoryIds: response.body.category.map(category => category.id)
          }
          delete product.category
          dispatch({ type: 'GET_PRODUCT_SUCCESS', product: product })
        })
    }
  },

  clearCurrentProduct: () => {
    return (dispatch) => {
      dispatch({ type: 'CLEAR_CURRENT_PRODUCT' })
    }
  },

  createProduct: (values) => {
    return dispatch => {

      if (values.publish) values.publishedAt = new Date()
      delete values.primaryImageId
      delete values.image
      delete values.publish

      request.post('/products')
      .send(values)
      .end((error, response) => {
        if (error) return dispatch({ type: 'CREATE_PRODUCT_FAILURE', error: response.body.message })
        dispatch({ type: 'CREATE_PRODUCT_SUCCESS', product: response.body })
      })

    }
  },

  updateProduct: (values) => {
    return (dispatch, getState) => {
      const { currentProduct } = getState().products
      if (currentProduct.publish) values.publishedAt = new Date()

      const payload = {
        categoryIds: values.categoryIds,
        depth: values.depth,
        description: values.description,
        discountedPrice: values.discountedPrice,
        height: values.height,
        name: values.name,
        price: values.price,
        primaryImageId: values.primaryImageId,
        stockCode: values.stockCode
      }


      request.patch(`/products/${currentProduct.id}`)
      .send(payload)
      .end((error, response) => {
        if (error) return dispatch({ type: 'UPDATE_PRODUCT_FAILURE', error: response.body.message })

        dispatch({ type: 'UPDATE_PRODUCT_SUCCESS', product: response.body })
      })
    }
  },

  uploadImages: () => {
    return (dispatch, getState) => {
      const { currentProduct } = getState().products

      if (!currentProduct.images.length) return dispatch({ type: 'CHANGE_PRODUCT_STAGE', stage: 3 })

      const reqs = currentProduct.images.map((image, index) => {
        return new Promise((resolve, reject) => {
          let req = request.post('/images')
          req.attach(`image`, image)
          req.field('productIds', [currentProduct.id])
          req.end((error, response) => {
            if(error) return reject(response.body.message)
            return resolve(response.body)
          })
        })
      })

      const getProduct = () => {
        return new Promise((resolve, reject) => {
          request
            .get(`/products/${currentProduct.id}`)
            .query('include=category,image')
            .end((error, response) => {
              if (error) return rejct(response.body.message)
              return resolve(response.body)
            })
        })
      }

      Promise.all(reqs)
        .then(responses => {

          return getProduct()
        })
        .then(product => {

          dispatch({ type: 'IMAGE_UPLOAD_SUCCESS', product })
        })
        .catch(error => {
          if (error) throw new Error(error)
        })

    }
  },

  deleteImage: (id) => {
    return (dispatch, getState) => {
      request.del(`/images/${id}`)
      .end((error, response) => {
        if (error) return dispatch({ type: 'DELETE_PRODUCT_IMAGE_FAILURE', error: response.body.message })
        dispatch({ type: 'DELETE_PRODUCT_IMAGE_SUCCESS', id })
      })
    }
  },

  makePrimaryImage: (id) => {
    return (dispatch, getState) => {

      const { currentProduct } = getState().products

      const payload = {
        name: currentProduct.name,
        primaryImageId: id
      }

      request.patch(`/products/${currentProduct.id}`)
      .send(payload)
      .end((error, response) => {
        if (error) return dispatch({ type: 'MAKE_PRIMARY_IMAGE_FAILURE', error: response.body.message })
        dispatch({ type: 'MAKE_PRIMARY_IMAGE_SUCCESS', id })
      })
    }
  },

  handleImageUpload: (images) => {
    return (dispatch) => {
      dispatch({ type: 'IMAGE_UPLOAD', images })
    }
  },

  togglePublish: () => {
    return (dispatch) => {
      dispatch({ type: 'PRODUCT_TOGGLE_PUBLISH' })
    }
  },

  delete: (id) => {
    return (dispatch) => {
      request
        .del(`/products/${id}`)
        .end((error, response) => {
          if (error) return dispatch({ type: 'DELETE_PRODUCT_FAILURE', error: response.body.message })

          dispatch({ type: 'DELETE_PRODUCT_SUCCESS', products: response.body })
        })
    }
  }

}

export default products
