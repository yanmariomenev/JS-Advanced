function checkIfSameNumber(number){
    let toArr = number.toString().split('').map(function(t){return parseInt(t)});
    let allEqual = toArr.every( (val, i, arr) => val === arr[0] );
    var sum = toArr.reduce((a, b) => a + b, 0);

    console.log(allEqual);
    console.log(sum);
}

checkIfSameNumber(2222222);
checkIfSameNumber(1234);