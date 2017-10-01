export default function contacts (state, action) {

  state = state || {}

  switch (action.type) {

    case 'SET_ACTION_TIMESTAMP':
      return Object.assign({}, state, {
        [action.name]: new Date()
      })

    default:
      return state
  }

}
