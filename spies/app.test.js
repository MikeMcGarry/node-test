const expect = require('expect')
const sinon = require('sinon')
const jest = require('jest')

describe('app', () => {
  it('It should call the spy correclty', () => {
    var callback = jest.fn()

    expect(callback).toHaveBeenCalled()
  })
})
