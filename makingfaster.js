// unique arr

const isUnique = (arr) => {
  let result = true;

  for (let i = 0; i < arr.length; i++) {
    //   console.log(`~~~~ OUTER LOOP ~~~~ i === ${i}`);

    for (let j = 0; j < arr.length; j++) {
      // console.log(`~~~~ INNER LOOP ~~~~ j === ${j}`);
      if (i !== j && arr[i] === arr[j]) {
        result = false;
      }
    }
  }

  return result;
};

//   console.log(isUnique([1,2,3]) === true

// console.log(isUnique([3,4,2,5]))

// making above algo faster

const isUniqueBreadCrumbs = (arr) => {
  let breadcrumbs = {};
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    if (breadcrumbs[arr[i]]) {
      result = false;
    } else {
      breadcrumbs[arr[i]] = true;
    }
  }

  return result;
};

// console.log(isUniqueBreadCrumbs([1, 2, 3, 4, 5]));

// //////////////////////////////////////////////////////////////////

//Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqSort = function (arr) {
  const breadcrumbs = {};
  let uniqArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!breadcrumbs[arr[i]]) {
      //   result = false;
      uniqArr.push(arr[i]);
      breadcrumbs[arr[i]] = true;
    }
  }

  return uniqArr.sort((a, b) => a - b);
};

// console.log(uniqSort([4, 2, 2, 3, 2, 2, 2,1])); // => [2,3,4]

// ********Memoization ,caching the value that afunction returns ************

// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
// const times10 = (n) => {
//   return n * 10;
// };

// console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
// console.log("times10 returns:", times10(9));

// Task 2: Use an object to cache the results of your times10 function.
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

// const cache = {};

// const memoTimes10 = (n) => {
//   if (n in cache) {
//     console.log("Fetching from the cache", n);
//     return cache[n];
//   } else {
//     console.log("calculating result");
//     let result = times10(n);
//     cache[n] = result;
//     return result;
//   }
// };

// console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
// console.log("Task 2 calculated value:", memoTimes10(9)); // calculated
// console.log("Task 2 cached value:", memoTimes10(9)); // cached

// ************Memoization with closure*******

const times10 = (n) => n * 10;

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosureTimes10 = (n) => {
  let cache={};
  return (n)=>{
    if(n in cache){
      console.log("fetching from cache");
      return cache[n]
    }
    else {
      console.log('Calculating result');
      let result = times10(n);
      cache[n] = result;
      return result
    }
  }
};


const memoClosureTimes10 = memoizedClosureTimes10();
console.log("~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~");
try {
  console.log("Task 3 calculated value:", memoClosureTimes10(9)); // calculated
  console.log("Task 3 cached value:", memoClosureTimes10(9)); // cached
} catch (e) {
  console.error("Task 3:", e);
}
