const loopNTimes = (n) => {
  // console.log("n===", n);

  if (n <= 1) {
    return "complete";
  }
  return loopNTimes(n - 1);
};

// console.log(loopNTimes(5));

// //////// Fatcorial with looping

function computeFactorialLoop(num) {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    // console.log(`result = ${result} * ${i} (${result * i}) `);
    result *= i;
  }
  return result;

  // for (let i = num; i >= 1; i--) {
  //   console.log(`result = ${result} * ${i} (${result * i}) `);
  //   result *= i;
  // }
  // return result;
}

// console.log(computeFactorialLoop(4));

// factoprial with recurrsion

const factorialRecurrsive = (num) => {
  if (num == 1) {
    // console.log("hitting the base case");
    return 1;
  } else {
    // console.log(`returning ${num} * computeFactorial(${num - 1})`);
    return num * factorialRecurrsive(num - 1);
  }
};
// console.log(factorialRecurrsive(4));

// //////LOG numbers with loop
function logNumbers(start, end) {
  console.log(`iteratively looping from ${start} to ${end}`);

  for (let i = start; i <= end; i++) {
    console.log("hitting index", i);
  }
}
// logNumbers(1, 3);

// //////LOG numbers with recurrsion
function logNumbersRecurrsively(start, end) {
  console.log(`recurssively looping from ${start} to ${end}`);
  function recurse(i) {
    console.log("hitting index", i);
    if (i < end) {
      recurse(i + 1);
    }
  }
  recurse(start);
}

logNumbers(1, 3);
logNumbersRecurrsively(1, 3);
