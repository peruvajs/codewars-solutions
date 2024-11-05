/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

function isVow(a){
    for (let i = 0; i < a.length; i++) {
      if (a[i] === 97 || a[i] === 101 || a[i] === 105 || a[i] === 111 || a[i] === 117)
        a[i] = String.fromCharCode(a[i]);
    }
    
    return a
}

// Test cases
console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]));