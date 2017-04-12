/* globals localStorage */

const storage = {}

storage.get = function (key) {
  let item = localStorage.getItem(key)
  if (!item) { return null }

  try {
    item = JSON.parse(item)
  } catch (e) {
    console.log('no object')
  }

  return item
}

storage.set = function (key, value) {
  if (!value) { return }

  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }

  localStorage.setItem(key, value)
}

export default storage
