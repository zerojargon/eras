export default function user(state, action) {

  const initialState = {
    loading: false,
    error: null,
    loginDetails: {
      email: '',
      password: ''
    },
    authenticated: false
  }

  state = state || initialState

  switch (action.type) {

    // Login

    case 'USER_LOGIN_REQUEST':
      return Object.assign({}, state, {
        loading: true
      })

    case 'USER_LOGIN_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        authenticated: true,
        error: null,
        ...action.payload
      })

    case 'USER_LOGIN_FAILURE':
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      })

    case 'UPDATE_LOGIN_DETAILS':
      return Object.assign({}, state, {
        loginDetails: Object.assign({}, state.loginDetails, {
          [action.key]: action.value
        })
      })

    // Logout

    case 'USER_LOGOUT':
      return initialState


    default:
    return state
  }
}
