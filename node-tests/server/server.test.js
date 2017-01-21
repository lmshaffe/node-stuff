const request = require('supertest');
const expect = require('expect')
var app = require('./server').app;

describe('Server', () => {

  describe('Get /', () => {
    it('should return error json', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found'
          });
        })
        .end(done);
    });
  })

  describe('Get /users', () => {
    it('should return users array', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({name: 'Lee', age: 99});
        })
        .end(done);
    })
  })
})
