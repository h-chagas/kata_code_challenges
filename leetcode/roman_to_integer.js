//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

//Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

const romanToInt = (romanNumber) => {
  let result = 0;
  for (let i = 0; i < romanNumber.length; i++) {
    switch (romanNumber[i]) {
      case "I":
        if ((romanNumber[i + 1] == "V")) {
          result += 4;
          i++;
          break;
        } else if ((romanNumber[i + 1] == "X")) {
          result += 9;
          i++;
          break;
        } else {
          result += 1;
          break;
        }
      case "V":
        result += 5;
        break;
      case "X":
        if ((romanNumber[i + 1] == "L")) {
          result += 40;
          i++;
          break;
        } else if ((romanNumber[i + 1] == "C")) {
          result += 90;
          i++;
          break;
        } else {
          result += 10;
          break;
        }
      case "L":
        result += 50;
        break;
      case "C":
        if ((romanNumber[i + 1] == "D")) {
          result += 400;
          i++;
          break;
        } else if ((romanNumber[i + 1] == "M")) {
          result += 900;
          i++;
          break;
        } else {
          result += 100;
          break;
        }
      case "D":
        result += 500;
        break;
      case "M":
        result += 1000;
        break;
      default:
        console.log(
          `There is a character in ${romanNumber} that doesn't represent a roman number.`
        );
        return;
    }
    
  }
  console.log(`The roman number ${romanNumber} is ${result}`);
  return result
};

romanToInt("IV");
romanToInt("XL");
romanToInt("CD");
romanToInt("XIII");
romanToInt("MMXXIII");
romanToInt("MCMXCIV");
romanToInt("MMXXIPUI");

// https://leetcode.com/problems/roman-to-integer/
