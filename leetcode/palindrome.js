// Given an integer x, return true if x is a palindrome, and false otherwise.

const isPalindrome = (x) =>  {
    if (x < 0) {
        console.log("The number ", x, " is negative, so this is a ", false, " palindrome");
        return false
    }
    let str = x.toString();
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }

    let revArr = [];
    for (let i = str.length-1; i >= 0; i--) {
        revArr.push(str[i])
    }

    if (JSON.stringify(arr) == JSON.stringify(revArr)) {
        console.log("The number ", x," is a ", true, "palindrome");
        return true
    }
    console.log("The number ", x," is a ", false, "palindrome");
    return false
};

isPalindrome(2111112);


//Source: https://leetcode.com/problems/palindrome-number/