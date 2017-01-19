// var square =  (x) => {
//   var result = x * x;
//   return result;
// };

//if only one argument, you don't need parenthesis
var square = (x) => x * x;
console.log(square(9));

var user = {
  name: 'Lee',
  sayHi: () => {
    //doesn't get the arguments object available in the alt
    console.log(`Hi. I'm ${this.name}`);//undefined this doesn't bind in arrow functions
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt();
user.sayHiAlt(1,2,3)
