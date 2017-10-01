import prefix from 'superagent-prefix'
import defaults from 'superagent-defaults'
import config from '../../config'
let request = null
const superagent = defaults()

request = superagent
  .use(prefix(config.API_URL))
  .on('request', function (req) {
  })

const setToken = (value) => {
  request = superagent
    .set('Authorization', `Bearer ${value}`)
    .use(prefix(config.API_URL))
    .on('request', function (req) {
    })
}

export { request, setToken }
