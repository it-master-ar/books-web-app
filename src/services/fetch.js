/* global fetch */

const fetchService = {}
fetchService.baseURL = ''

fetchService.get = function (path, headers) {
  return fetch(`${this.baseURL}${path}`, {
    method: 'GET',
    headers
  })
}

fetchService.post = function (path, body, headers) {
  return fetch(`${this.baseURL}${path}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers
  })
}

export default fetchService
