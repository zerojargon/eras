export default function products(state, action) {

  const newProduct = {
    name: '',
    stockCode: '',
    price: '',
    discountedPrice: '',
    description: '',
    primaryImageId: '',
    categoryIds: [],
    width: '',
    height: '',
    depth: '',
    images: [],
    image: [],
    publish: false
  }

  const initialState = {
    data: [],
    stage: 1,
    currentProduct: {
      ...newProduct
    },
  }

  state = state || initialState

  switch (action.type) {


    case 'GET_PRODUCTS_SUCCESS':
    case 'DELETE_PRODUCT_SUCCESS':
      return Object.assign({}, state, {
        data: action.products
      })

    case 'GET_PRODUCT_SUCCESS':
      return Object.assign({}, state, {
        currentProduct: Object.assign({}, state.currentProduct, {
          ...action.product
        })
      })

    case 'GET_PRODUCT_FAILURE':
    case 'CLEAR_CURRENT_PRODUCT':
      return Object.assign({}, state, {
        currentProduct: Object.assign({}, state.currentProduct, newProduct),
        stage: 1
      })

    case 'PRODUCT_TOGGLE_PUBLISH':
      return Object.assign({}, state, {
        currentProduct: Object.assign({}, state.currentProduct, {
          publish: !state.currentProduct.publish
        })
      })

    case 'CREATE_PRODUCT_SUCCESS':
    case 'UPDATE_PRODUCT_SUCCESS':
      return Object.assign({}, state, {
        stage: 2,
        currentProduct: Object.assign({}, state.currentProduct, action.product)
      })

    case 'IMAGE_UPLOAD_SUCCESS':
      return Object.assign({}, state, {
        stage: 3,
        currentProduct: Object.assign({}, state.currentProduct, action.product)
      })

    case 'CHANGE_PRODUCT_STAGE':
      return Object.assign({}, state, {
        stage: action.stage
      })

    case 'MAKE_PRIMARY_IMAGE_SUCCESS':
      return Object.assign({}, state, {
        currentProduct: Object.assign({}, state.currentProduct, {
          primaryImageId: action.id
        })
      })

    case 'MAKE_PRIMARY_IMAGE_SUCCESS':
      return Object.assign({}, state, {
        currentProduct: Object.assign({}, state.currentProduct, {
          image: state.currentProduct.image.filter(image => image.id !== action.id)
        })
      })


    case 'IMAGE_UPLOAD':
      return Object.assign({}, state, {
        currentProduct: {
          ...state.currentProduct,
          images: [
            ...state.currentProduct.images,
            ...action.images
          ]
        }
      })

    default:
    return state
  }
}
