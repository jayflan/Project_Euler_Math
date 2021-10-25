const fibFunc = (maxNum, sumFib, fibNum1, fibNum2, sumEven) => {

  if(sumFib >= maxNum) return sumEven;

  sumFib = fibNum1 + fibNum2;
  
  if(sumFib % 2 === 0) sumEven += sumFib;
  
  fibNum1 = fibNum2;
  fibNum2 = sumFib;
  
  return fibFunc(maxNum, sumFib, fibNum1, fibNum2, sumEven)
}

console.log(fibFunc(4000000, 0, 1, 2, 2));