import ZBRequest from 'zb-request'

const request = new ZBRequest({
  baseURL: import.meta.env.VITE_APP_API_BASE,
  timeout: 10000,
  interceptors: {},
})

export default request
