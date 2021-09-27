function isPalindrome(word) {
  // Write your algorithm here
  if (word.length===1){
    return true
  }
  let mid = word.length//2
  for (let i = 0; i <= mid; i++) {
    if (word[i]!==word[word.length-1-i]) {
      return false
    }
  }
  return true
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
