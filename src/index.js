import './css/main.css'
import Vue from 'vue/dist/vue.js'

import apiService from './services/api-fetch'
import storage from './services/storage'

import book from './components/book'

Vue.component('book', book)

new Vue({ // eslint-disable-line
  el: '#app',

  name: 'BooksApp',

  data () {
    return {
      books: storage.get('books'),

      newBook: {
        title: '',
        author: ''
      }
    }
  },

  created () {
    if (!this.books || !this.books.length) {
      this.getBooks()
    }
  },

  methods: {
    createBook () {
      apiService.createBook(this.newBook)
        .then(() => {
          this.books.push(this.newBook)
          this.newBook = { title: '', author: '' }
        })
    },

    getBooks () {
      apiService.getBooks()
        .then(books => { this.books = books })
    }
  }
})
