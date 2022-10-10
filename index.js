//function hasTargetSum(array, target) {
  //for (let i= 0; i< array.length; i++){
    //const complement = target - array[i];
    //for (let j=i+1; j , array.length; j++){
      //if (array [j]===complement)return true;
  //}
  //  return false;
  //} 
//}
/* function hastTargetSum(array, target){
    const seenNumbers={}
    for (const number of array){
      const complement = target - number;
      if (seenNumbers [complement]) return true;
      seenNumbers[number] = true;
    }
    return false;
}
*/

function hasTargetSum (array, target){
      const seenNumbers= new Set();
      for(const number of array){
        const complement = target- number;
        if (seenNumbers.has(complement)) return true;
        seenNumbers.add(number)
      }
      return false;
} 



/* 
  Write the Big O time complexity of your function here
*/

/* 
  iterate over the array of numbers
  for the current number in array- look for another number in the array that adds up to the target
  when found return true
*/

/*
  I set i to equal zero or start at the first index which is 0.  then so long as i is less than the array length, it will continue to loop until i
  is greater than the array length and stop.
  it will look at j as the second number in the array or index 1 and then it will add those two numbers together and compare the sum to the target
  if the sum and target are the same then it will return true 
  if the sum and the target are not the same then it will return false then  i will move to index 1 and j will move to index 2 
  and continue the process until it reaches the end of the loop
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10, 9, 11, 6, 14], 20));
}

module.exports = hasTargetSum;
