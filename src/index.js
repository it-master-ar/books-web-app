import apiService from './api'

apiService.getBooks()
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log('Error!', err)
  })
