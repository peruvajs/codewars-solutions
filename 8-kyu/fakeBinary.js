/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x) {
    let output = "";
    
    for (let i of x) {
      if (+i <= 4) {
        output += "0";
      } else {
        output += "1";
      }
    }

    return output;
}

// Test cases
console.log(fakeBin("45385593107843568"));
console.log(fakeBin("509321967506747"));
console.log(fakeBin("366058562030849490134388085"));