const axios = require('axios')

const api = axios.create({
  baseURL: 'https://books-demo-api.herokuapp.com'
})

const apiService = {}

apiService.getBooks = function () {
  return api.get('/book')
}

export default apiService
