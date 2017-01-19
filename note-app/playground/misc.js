const fs = require('fs');
const os = require('os');
const notes = require('../notes');
const _ = require('lodash');

var filteredArray = _.uniq(['Lee','Lee',5,2,'Lee',6,2,1,1]);
console.log(filteredArray);

console.log(_.isString(true));
console.log(_.isString('Lee'));

console.log(`Result: ${notes.add(91,20)}`);

var user = os.userInfo();

//tick mark is an ES6 feature to avoid concatenating with + (Template literals)
fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err) {
  if (err) console.log('Unable to write to file! :(');
});
