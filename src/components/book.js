export default {
  name: 'Book',

  props: {
    book: {
      type: Object
    }
  },

  template: `
    <li>
      <b> {{ book.title }} </b> -
      <span class="author"> {{ book.author }} </span>
      <a class="remove" @click.prevent="remove">x</a>
    </li>
    `,

  methods: {
    remove () {
      this.$emit('remove', this.book)
    }
  }
}
