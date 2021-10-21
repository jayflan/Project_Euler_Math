const multipleSum = (numA, numB, range) => {
  let sumA = 0, sumB = 0;
  
  for(let i = numA; i < range; i += numA) {
    sumA += i;
  };

  for(let i = numB; i < range; i += numB) {
    //don't double sum in sum varialbes if numA & numB are divisable;
    if(!Number.isInteger(sumB + i/numA)) sumB += i;
  };

  return sumA + sumB;

};


console.log(multipleSum(3, 5, 1000));
