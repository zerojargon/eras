export default function seo(state, action) {

  const initialState = {
    products: [],
    categories: [],
    product: {
      image: []
    },
    category: {
      product: []
    },
    contactDetails: {},
    error: null
  }

  state = state || initialState

  switch (action.type) {

    case 'SEO_GET_CATEGORIES_FAILURE':
    case 'SEO_GET_CATEGORY_FAILURE':
    case 'SEO_GET_PRODUCTS_FAILURE':
    case 'SEO_GET_PRODUCT_FAILURE':
      return Object.assign({}, state, {
        error: action.error
      })

    case 'SEO_GET_CATEGORIES_SUCCESS':
      return Object.assign({}, state, {
        categories: action.payload
      })

    case 'SEO_GET_CATEGORY_SUCCESS':
      return Object.assign({}, state, {
        category: action.payload
      })

    case 'SEO_GET_PRODUCTS_SUCCESS':
      return Object.assign({}, state, {
        products: action.payload
      })

    case 'SEO_GET_PRODUCT_SUCCESS':
      return Object.assign({}, state, {
        product: action.payload
      })

    case 'SEO_POPULATE_CONTACT_FORM':
      return Object.assign({}, state, {
        contactDetails: action.values
      })

    default:
    return state
  }
}
