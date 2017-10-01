import { request } from '../services/request'
import navigate from '../services/navigator'


const categories = {

  get: () => {
    return (dispatch) => {
      request
        .get('/categories')
        .end((error, response) => {
          if (error) return dispatch({ type: 'GET_CATEGORIES_FAILURE', error: response.body.message })

          dispatch({ type: 'GET_CATEGORIES_SUCCESS', categories: response.body.data })
        })
    }
  },

  getById: (id) => {
    return (dispatch) => {
      request
        .get(`/categories/${id}/products`)
        .end((error, response) => {
          if (error) return dispatch({ type: 'GET_CATEGORY_FAILURE', error: response.body.message })

          dispatch({ type: 'GET_CATEGORY_SUCCESS', category: response.body })
        })
    }
  },

  clearCurrentCategory: () => {
    return (dispatch) => {
      dispatch({ type: 'CLEAR_CURRENT_CATEGORY' })
    }
  },

  updateCurrentCategory: (id, value) => {
    return (dispatch) => {
      dispatch({ type: 'UPDATE_CURRENT_CATEGORY', id, value })
    }
  },

  createCategory: () => {
    return (dispatch, getState) => {
      const { currentCategory } = getState().categories

      const payload = {
        name: currentCategory.name
      }

      request
        .post('/categories')
        .send(payload)
        .end((error, response) => {
          if (error) return dispatch({ type: 'CREATE_CATEGORY_FAILURE', error: response.body.message })

          dispatch({ type: 'CREATE_CATEGORY_SUCCESS' })
          return navigate('admin/categories')
        })
    }
  },

  updateCategory: () => {
    return (dispatch, getState) => {
      const { currentCategory } = getState().categories

      const payload = {
        name: currentCategory.name
      }

      request
        .patch(`/categories/${currentCategory.id}`)
        .send(payload)
        .end((error, response) => {
          if (error) return dispatch({ type: 'UPDATE_CATEGORY_FAILURE', error: response.body.message })

          dispatch({ type: 'UPDATE_CATEGORY_SUCCESS' })
          return navigate('admin/categories')
        })
    }
  },

  delete: (id) => {
    return (dispatch) => {
      request
        .del(`/categories/${id}`)
        .end((error, response) => {
          if (error) return dispatch({ type: 'DELETE_CATEGORY_FAILURE', error: response.body.message })

          dispatch({ type: 'DELETE_CATEGORY_SUCCESS', categories: response.body })
        })
    }
  }

}

export default categories
