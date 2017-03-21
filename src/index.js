const hello = () => {
  console.log('Hello World!')
}

hello()

class Person {
  constructor (name = 'John Doe') {
    this.name = name
  }

  hello () {
    console.log(`Hello, my name is ${this.name}`)
  }
}

const p1 = new Person()
p1.hello()
p1.hello()
p1.hello()
p1.hello()
p1.hello()
p1.hello()
p1.hello()

import './css/main.css'
import text from './second'

document.write(text)
