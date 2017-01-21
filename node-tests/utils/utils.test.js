const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(91, 20);
      expect(res).toBe(111).toBeA('number');
      // if (res !== 111) throw new Error(`Expected 111, but got ${res}`);
    });
  });

  // bad test for async!!!!!
  // it('should async add two numbers - bad test example', () => {
  //   utils.asyncAdd(91, 25, (sum) => {
  //     expect(sum).toBe(116).toBeA('number'); //this still passes because the function
  //     //returns before the async callback gets triggered. This expect statement never runs
  //   });
  // });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(91, 25, (sum) => {
      expect(sum).toBe(116).toBeA('number');
      done();//calling done let's mocha know when we're actually done
    });
  });

  it('should square a number', () => {
    var res = utils.square(11);
    expect(res).toBe(121).toBeA('number');
    // if (res !== 121) throw new Error(`Expected 121, but got ${res}`);
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(12, (product) => {
      expect(product).toBe(144).toBeA('number');
      done();
    });
  });

  it('should verify first and last names are set', () => {
    var fullName = 'Lee Shaffer';
    var user = {location: 'Tampa', age: 99};
    var res = utils.setName(user, fullName);

    //That JS object pass by reference
    expect(user.firstName).toBe('Lee').toBeA('string');
    expect(user.lastName).toBe('Shaffer').toBeA('string');
    //or
    expect(res).toInclude({
      firstName: 'Lee',
      lastName: 'Shaffer'
    })
  })

  it('should expect some values', () => {
    expect(12).toNotBe(11);
    expect({name: 'lee'}).toNotEqual({name: 'Lee'}); //Objects should use equal to compare the properties and values
    expect([2,3,4]).toExclude(1);
    expect({
      name: 'Lee',
      age: 99,
      location: 'Tampa'
    }).toInclude({
      age: 99
    })
  });
});
