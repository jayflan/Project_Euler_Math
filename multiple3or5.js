const singleMultipleSum = (num, numTargetRange) => {
  let sum = 0;
  for(let i = num; i < numTargetRange; i += num) {
    sum += i;
  } 
  return sum;
};

const multiMultipleSum = (...callbackFn) => {
  let arrArgs = [...callbackFn];
  return arrArgs.reduce((accum, currArg) => {
    accum += currArg;
    return accum;
  }, 0);
};

const multipleOf03 = singleMultipleSum(3, 1000);
const multipleOf05 = singleMultipleSum(5, 1000)
const totalSum = multiMultipleSum(multipleOf03, multipleOf05);

console.log(totalSum);
// console.log(multipleOf05);