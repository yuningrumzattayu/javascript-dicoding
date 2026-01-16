import { doSomething } from '../asynchronous-process/promise-utils.js';

function onFulfilled(doSomethingData) {
  // Do your jobs when "fulfilled" happens…
  console.log(doSomethingData);
}

function onRejected(doSomethingError) {
  // Do your jobs when "Rejected" happens…
  console.error(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);
