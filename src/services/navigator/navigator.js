import { browserHistory } from 'react-router'

const navigate = (route) => {
  return browserHistory.push(`/${route}`)
}

export default navigate
