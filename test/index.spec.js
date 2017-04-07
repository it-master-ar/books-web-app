/* global describe it assert beforeEach */
let array

describe('Array', () => {
  beforeEach(() => {
    array = [1, 2, 3, 4]
  })

  describe('push()', () => {
    it('pushing', () => {
      array.push(5)
      assert.equal(5, array.length)
    })
  })

  describe('indexOf()', () => {
    it('should return -1 when value does not exist', () => {
      const result = array.indexOf(5)
      assert.equal(-1, result)
    })

    it('should return index when value exist', () => {
      const result = array.indexOf(1)
      assert.equal(0, result)
    })
  })
})
