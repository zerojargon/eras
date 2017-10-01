export default function categories(state, action) {

  const initialState = {
    data: [],
    currentCategory: {

    },
    currentCategory: {
      name: ''
    }
  }

  state = state || initialState

  switch (action.type) {


    case 'GET_CATEGORIES_SUCCESS':
    case 'DELETE_CATEGORY_SUCCESS':
      return Object.assign({}, state, {
        data: action.categories
      })

    case 'GET_CATEGORY_SUCCESS':
      return Object.assign({}, state, {
        currentCategory: action.category
      })

    case 'GET_CATEGORY_FAILURE':
    case 'CLEAR_CURRENT_CATEGORY':
      return Object.assign({}, state, {
        currentCategory: Object.assign({}, state.currentCategory, {
          id: null,
          name: ''
        })
      })

    case 'UPDATE_CURRENT_CATEGORY':
      return Object.assign({}, state, {
        currentCategory: Object.assign({}, state.currentCategory, {
          [action.id]: action.value
        })
      })

    default:
    return state
  }
}
