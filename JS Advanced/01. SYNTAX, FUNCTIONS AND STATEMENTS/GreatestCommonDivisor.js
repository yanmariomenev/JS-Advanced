function gcd(a, b){
let copyA = a;
let copyB = b;

while(copyB !== 0){
    let temp = copyA % copyB;
    copyA = copyB;
    copyB = temp;

    /* [copyA, copyB] = [copyB, copyA % copyB] */
}
 console.log(copyA);
}
gcd(15, 5)
gcd(2154, 458)