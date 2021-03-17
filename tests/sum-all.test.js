const describe = require('mocha').describe
const it = require('mocha').it
const sumAll = require('../calculation')
const expect = require('chai').expect


describe('calculation', () => {
  describe('sumAll', () => {
    it('return the sum of all the numbers in the array', () => {
      //set up test data
      var testData = [42, 76, 100]

      //call the function from outside file
      var total = sumAll(testData)

      //assert what should be true
      expect(total).to.equal(218)
    })
  })
})