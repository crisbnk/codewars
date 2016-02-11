// Array2Binary addition
// Given an array containing only numbers, add all the elements and return the binary equivalent of that sum.
// Note:The binary equivalent should be in string and the array should contain only number otherwise return false.
// arr2bin(1,2) == '11'
// arr2bin(1,2,'a') == false

function arr2bin(n){
  let res = 0;
  for(let i = 0; i < n.length; i++) {
    if(typeof n[i] === "number")
      res += n[i];
    else
      return false;
  }
  return res.toString(2);
}
