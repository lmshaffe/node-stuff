var getUser = (id, callback) => {
  var user = {
    id: 99,
    name: 'Lee'
  };
  setTimeout(() => {
    callback(user);
  },3000)
};

getUser(99, (userObj) => {
  console.log(userObj);
});
