import './css/main.css'
import Vue from 'vue/dist/vue.js'

import apiService from './api-fetch'
import storage from './storage'

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
