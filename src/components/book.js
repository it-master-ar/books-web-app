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
    </li>
    `
}
