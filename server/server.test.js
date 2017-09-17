const request = require('supertest')
const server = require('./server.js')

var app = server.app

it("Should return the response", (done) => {
  request(app)
    .get('/')
    .expect('Hellllllllo')
    .expect(200)
    .end(done)
})
