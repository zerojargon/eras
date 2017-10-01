const actionCache = store => next => action => {
  if (action.noCache || !action.promise) return next(action)

  const timeout = action.ttl || 3000
  const calledPreviously = store.getState().timestamps[action.type]
  const diff = new Date() - new Date(calledPreviously)

  store.dispatch({ type: 'SET_ACTION_TIMESTAMP', name: action.type, ignore: true })

  if (isNaN(diff) || (diff > timeout)) return next(action)

  delete action.promise
  return next(action)
}

export default actionCache
