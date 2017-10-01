export default function app(state, action) {

  const initialState = {
    error: null,
    loading: false,
    ready: false
  }

  state = state || initialState

  switch (action.type) {

    case 'APP_ERROR':
      return Object.assign({}, state, {
        error: action.message
      })

    case 'APP_CLEAR_ERROR':
      return Object.assign({}, state, {
        error: null
      })

    case 'APP_READY':
      return Object.assign({}, state, {
        ready: true
      })

    // Logout

    case 'USER_LOGOUT':
      return Object.assign({}, state, {
        ...initialState,
        ready: true
      })


    default:
    return state
  }
}
