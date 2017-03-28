import apiService from './api'
import storage from './storage'

const booksList = document.getElementById('booksList')
const booksRefresh = document.getElementById('booksRefresh')

const books = storage.get('books')

if (books && books.length) {
  books.forEach((b) => {
    booksList.innerHTML += `<li>${b.title} - ${b.author}</li>`
  })
}

booksRefresh.addEventListener('click', (e) => {
  e.preventDefault()

  apiService.getBooks()
    .then((res) => {
      storage.set('books', res.data)
      console.log(res.data)

      booksList.innerHTML = ''

      res.data.forEach((b) => {
        booksList.innerHTML += `<li>${b.title} - ${b.author}</li>`
      })
    })
    .catch((err) => {
      console.log('Error!', err)
    })
})
