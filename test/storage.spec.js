/* global describe it assert beforeEach */

import storage from '../src/storage'

describe('Storage', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  describe('get()', () => {
    it('should get the item', () => {
      window.localStorage.setItem('test', 1)
      const result = storage.get('test')

      assert.equal(result, 1)
    })
  })

  describe('set()', () => {
    it('should set the item', () => {
      storage.set('test', 1)
      const result = window.localStorage.getItem('test')

      assert.equal(result, 1)
    })
  })
})
