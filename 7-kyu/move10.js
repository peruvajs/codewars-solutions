/*
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/

function offset(str) {
    let newStr =  "";

    for (let char of str) {
        let t = char.charCodeAt(0);

        if (t >= 65 && t <= 90) {
            if ( (t + 10) > 90)
            {
                newStr += String.fromCharCode(t + 10 - 26);
            } else {
                newStr += String.fromCharCode(t + 10);
            }
        } else if (t >= 97 && t <= 122) {
            if ( (t + 10) > 122) {
                newStr += String.fromCharCode(t + 10 - 26);
            } else {
                newStr += String.fromCharCode(t + 10);
            }
        } else {
            newStr += char
        }
    }

    return newStr;
}

// Test cases
console.log(offset("I love this donuts! Do you?"));
console.log(offset("abz !№;%:?*()"));
console.log(offset("123"));
console.log(offset(""));