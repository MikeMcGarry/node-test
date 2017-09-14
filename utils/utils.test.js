const utils = require('./utils')

it('Should add two numbers', () => {
  var result = utils.add(5,10)
  if (result != 15) {
    throw new Error(`expected 15 got ${result}`)
  }
})

it('Should square the number', () => {
  var result = utils.square(10)
  if (result != 100) {
    throw new Error(`expected 100 got ${result}`)
  }
})
