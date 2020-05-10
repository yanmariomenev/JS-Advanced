function arrayRotate(array) {
    let rotateCount = array.pop();

    for (let i = 0; i < rotateCount % array.length; i++) {
        let tempArr = array.pop();
        array.unshift(tempArr);
    }

    console.log(array.join(' '));
  }

  arrayRotate(['1',
  '2',
  '3',
  '4',
  '2'
]);
arrayRotate(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
]);