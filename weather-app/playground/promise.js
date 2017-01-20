var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else reject('Arguments must be numbers');
    },1500)
  })
};

asyncAdd(91, 20).then((result) => {
  console.log('Result: ', result);
  return asyncAdd(result, 19);
}//,(errMsg) => {console.log('Error: ', errMsg);})
// you can specify error handler for each chain and if it fails, it will continue
).then((result) => {
  console.log('Should be 130:', result);
}//,(errMsg) => { console.log(errMsg);}
//or you can use a catch where if one fails, it stops continuing the chain
).catch((errMsg) => {
  console.log(errMsg);
})

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey, it worked!');
//     // reject('Unable to fulfill promise');
//   },2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errMsg) => {
//   console.log('Error: ', errMsg);
// });
