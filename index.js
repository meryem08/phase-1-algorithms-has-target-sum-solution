// Write your algorithm here
  function hasTargetSum(array, target) {
    const seenNumbers = new Set(); // Initialize an empty Set
    for (const number of array) {
      const complement = target - number;
  
      // .has returns true if the Set includes the complement
      if (seenNumbers.has(complement)) return true;
  
      // .add adds the number to the Set
      seenNumbers.add(number);
    }
    return false;
}

/* 
  Write the Big O time complexity of your function here
  - Time complexity: O(n)
*/

/* 
  Add your pseudocode here

 -create an empty Set called seenNumbers
  iterate over the array of numbers
 - for the current number, calculate its complement
 - check if seenNumbers includes the complement
 -if yes, return true
 -add the current number to seenNumbers
 -if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here

  We start by creating an empty Set called seenNumbers to keep track of the numbers we have seen so far. We then iterate over the input array of numbers. For each number, we calculate its complement by subtracting it from the target number.

We check if the Set seenNumbers already contains the complement. If it does, we return true because we have found a pair of numbers that adds up to the target.

If the complement is not in the Set, we add the current number to the Set to keep track of it. We continue this process for all numbers in the array.

If we reach the end of the array without finding a pair that adds up to the target, we return false.

This solution has a time complexity of O(n) because we iterate through the array once, and the Set allows for efficient constant-time lookups.
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
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;