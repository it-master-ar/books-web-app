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
    this.getBooks()
  },

  methods: {
    createBook () {
      apiService.createBook(this.newBook)
        .then(res => console.log('✅', res))
        .catch(err => console.log('❌', err))
    },

    getBooks () {
      apiService.getBooks()
        .then(books => { this.books = books })
    }
  }
})
