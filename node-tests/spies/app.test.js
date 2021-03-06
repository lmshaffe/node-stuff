const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
// app.__set__
// app.__get__

describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Lee', 99);
    // expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('Lee', 99);
  })

  it('should call saveUser with user ojbect', () => {
    var email = 'Lee@example.com';
    var password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  })
})
