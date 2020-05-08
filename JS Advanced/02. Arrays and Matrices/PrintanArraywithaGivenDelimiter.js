function solve(arr){
let delimeter = arr.slice(-1).pop();
arr.splice(-1, 1);
console.log(arr.join(delimeter));
}

solve(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-'])
solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!', 
'_'])