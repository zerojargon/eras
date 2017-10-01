import { request, setToken } from '../services/request'
import navigate from '../services/navigator'
import _ from 'lodash'
import { reset } from 'redux-form';

const user = {

  // Login

  updateLoginDetails: (key, value) => {
    return (dispatch) => {
      return dispatch({ type: 'UPDATE_LOGIN_DETAILS', key, value })
    }
  },

  login: () => {
    return (dispatch, getState) => {
      const { email, password } = getState().user.loginDetails
      dispatch({
        type: 'USER_LOGIN',
        promise: () => {
          return new Promise((resolve, reject) => {
            request
              .post('/token')
              .send({ email: email, password: password })
              .end((error, response) => {
                if (error) return reject({ type: 'USER_LOGIN_FAILURE', error: response.body.message })

                resolve(response.body)
                console.log(response.body)
                // Append the user's token to their ajax requests
                return setToken(response.body.token)
              })
          })
        },
        successAction: (response) => {
          document.cookie = JSON.stringify(response)
          navigate('admin/products')
        },
        noCache: true
      })
    }
  },

  // Logout

  logout: () => {
    return (dispatch) => {
      navigate('')
      dispatch({ type: 'USER_LOGOUT' })
      document.cookie = ""
    }
  },
}

export default user
