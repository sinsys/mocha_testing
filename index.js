divide = (a, b) => {
  if ( b == 0 ) {
    throw new Error('Cannot divide by 0');
  };
  return a / b;
}

sort = (list) => {
  if ( !Array.isArray(list) ) {
    return false;
  }
  for(let i = 0; i < list.length; i++){
    let j = i;
    while(j > 0 && list[j - 1] > list[j]){
      let temp = list[j];
      list[j] = list[j - 1];
      list[j - 1] = temp;
      j--;
    }
  }
  return list;
}

arrayDiff = (arr1, arr2) => {
  return (
    arr1.filter(val => 
      !arr2.includes(val)
    )
  )
}

sumOfArray = (arr) => {
  return (
    new Promise((res, rej) => {
      const ans = arr.reduce((acc, cur) => {
        const num = parseFloat(cur);
        return (
          acc + 
          (isNaN(num)
            ? 0
            : num
          )
        );
      }, 0);
      res(ans);
    })
  );
};

isEven = (num) => {
  return (
    num % 2 === 0
  )
};

module.exports = { 
  divide,
  sort,
  arrayDiff,
  sumOfArray,
  isEven
};