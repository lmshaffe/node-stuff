const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'My App v1.0'
  });
});

app.get('/users', (req, res) => {
  var users =[
    {name: 'Lee', age: 99},
    {name: 'Amber', age: 99},
    {name: 'Dexter', age: 99}
  ];
  res.send(users);
});

app.listen(3000);

module.exports.app = app;
