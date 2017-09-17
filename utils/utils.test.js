const utils = require('./utils')
const expect = require('expect')

describe('utils', () => {

  describe('#add', () => {
    it('Should add two numbers', () => {
      var result = utils.add(5,10)
      expect(result).toBe(15)
    })

    it('Should add two numbers asynch', (done) => {
      var result = utils.addASynch(5,10, (sum) => {
        expect(sum).toBe(15)
        done()
      })
    })
  }
  )

  describe('#square', () => {
    it('Should square the number', () => {
      var result = utils.square(10)
      expect(result).toBe(100)
      }
    )

    it('Should square the number asynch', (done) => {
      var result = utils.squareASynch(5, (square) => {
        expect(square).toBe(25)
        done()
      })

  })

  })

  it('Should split the names', () => {
    var user = utils.setName({}, "Mike McGarry")
    expect(user).toHaveProperty("firstName", "Mike")
    expect(user).toHaveProperty("lastName", "McGarry")
  })





})
