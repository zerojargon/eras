import merge from 'lodash/merge'

const browser = typeof window !== 'undefined'
const ip = process.env.IP || '0.0.0.0'
const port = process.env.PORT || 8080

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    baseUrl: `http://${ip}:${port}`,
    browser,
    ip,
    port,
    API_URL: 'http://api.erasofstyle.com',
    privileges : {
      admin: 4,
      staff: 3,
      invoice: 2,
      regular: 1
    }
  },
  test: {},
  development: {},
  staging: {
  },
  production: {
    ip: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 8080,
  }
}

const envConfig = merge(config.all, config[config.all.env])

export default envConfig
