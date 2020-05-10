function extract(arr){
    
  let solve = arr.reduce((acc, currentElement)=> {
      const lastElement = acc[acc.length - 1];

      if(currentElement >= lastElement || lastElement === undefined){
          acc.push(currentElement)
      }
     return acc;
  }, []);
  console.log(solve.join('\n'));
}
extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
extract([1,
    2,
    3,
    4
]);

extract([20,
    3,
    2,
    15,
    6,
    1
]);