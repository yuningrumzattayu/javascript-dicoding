function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    resolve('You Did It!');
  });
}

export function doSomething() {
  return new Promise(promiseExecutor);
}
