function asyncTest() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('hello lambda!');
    }, 2000);
  });
}

exports.handler = async function() {
  const hello = await asyncTest();
  console.log(hello);
};