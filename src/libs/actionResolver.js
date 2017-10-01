const actionResolver = store => next => action => {
  if (action.ignore || !action.promise) return next(action)

  return new Promise((resolve, reject) => {
    store.dispatch({ type: `${action.type}_REQUEST`, ignore: true })

    action.promise(store)

    .then(response => {
      store.dispatch({ type: `${action.type}_SUCCESS`, payload: response, ignore: true })
      if(action.successAction) {
        action.successAction(response)
      }
      return resolve()
    })

    .catch(error => {
      console.log(error, 'error')
      store.dispatch({ type: `${action.type}_FAILURE`, error: error, ignore: true })
      return resolve()
    })
  })
}

export default actionResolver
