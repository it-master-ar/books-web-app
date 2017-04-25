import apiService from './api'
import storage from './storage'

const booksList = document.getElementById('booksList')
const bookCreate = document.getElementById('bookCreate')
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
      storage.set('books', res)
      console.log(res)

      booksList.innerHTML = ''

      res.forEach((b) => {
        booksList.innerHTML += `<li>${b.title} - ${b.author}</li>`
      })
    })
    .catch((err) => {
      console.log('Error!', err)
    })
})

bookCreate.addEventListener('submit', (e) => {
  e.preventDefault()

  const book = {
    author: bookCreate.elements.author.value,
    title: bookCreate.elements.title.value
  }

  console.log(book)

  apiService.createBook(book)
    .then(res => console.log('✅', res))
    .catch(err => console.log('❌', err))
})
