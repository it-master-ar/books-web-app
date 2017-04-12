import fetch from './fetch'
fetch.baseURL = 'https://books-demo-api.herokuapp.com'

const apiService = {}

apiService.getBooks = function () {
  return fetch.get('/book')
    .then(res => res.json())
}

apiService.deleteBook = function (id) {
  return fetch.del(`/book/${id}`)
    .then(res => {
      if (res.status !== 204) {
        throw new Error()
      }

      return res
    })
}

apiService.createBook = function (book) {
  const headers = { 'Content-Type': 'application/json' }
  return fetch.post('/book', book, headers)
    .then(res => {
      if (res.status !== 201) {
        throw new Error()
      }

      return res
    })
}

export default apiService
