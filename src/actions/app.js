import { request } from '../services/request'
import navigate from '../services/navigator'
import user from './user'

const app = {
  checkAuthentication: () => {
    return dispatch => {
      dispatch({
        type: 'USER_AUTHENTICATION_CHECK',
        promise: () => {
          return new Promise((resolve, reject) => {
            return request
              .get(`/authentication`)
              .end((error, response) => {
                if (response.statusCode === 401) {
                  dispatch(user.logout())
                } else {
                  dispatch({ type: 'USER_AUTHENTICATED' })
                }
              })
          })
        }
      })
    }
  }
}

export default app
