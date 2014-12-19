//alert("JavaScript works!");
// Dennis Burns
// SDI 1411
// Project 4

//String
// Phone number pattern
function isPhoneNumber(str) {
  if(str.length !== 12) return false;

  ret = true;
  Array.prototype.forEach.call(str, function(char, idx) {
    switch(idx) {
      case 0:
      case 1:
      case 2:
      case 4:
      case 5:
      case 6:
      case 8:
      case 9:
      case 10:
      case 11:
        ret = isNaN(char) ? false : ret;
        break;

      case 3:
      case 7:
        ret = char !== '-' ? false : ret;
        break;
    }
  });
  return ret;
}
//email pattern 
function isEmail(str) {
  function isValid(char) {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.-_'.contains(char.toUpperCase());
  }

  var splitStr = str.split('@');
  if(splitStr.length === 2 && splitStr[1].indexOf('.') !== -1) {
    var ret = true;
    Array.prototype.forEach.call(splitStr[0], function(char) {
      ret = !isValid(char) ? false : ret;
    });
    Array.prototype.forEach.call(splitStr[1], function(char) {
      ret = !isValid(char) ? false : ret;
    });
    return ret;
  }
  return false;
}

//URL String 
function isURL(str) {
  return (str.indexOf('http://') === 0) || (str.indexOf('https://') === 0);
}
//Upper and Lowercase string 
function titleCase(str) {
  return Array.prototype.map.call(str, function(val, idx, arr) {
    // Uppercase first letter of string.
    if(idx === 0) {
      return val.toUpperCase();
    }

    // Uppercase letter after space.
    if(arr.charAt(idx - 1) === ' ') {
      return val.toUpperCase();
    }

    // Lowercase anything else.
    return val.toLowerCase();
  }).join('');
}
//Seperate string
function replaceSeperator(str, seperator, newSeperator) {
  return str.replace(seperator, newSeperator);
}

// Number
// Format a number to use a specific number of decimal places
function formatDecimal(num, decimals) {
  return num.toFixed(decimals);
}
//Fuzzy-match a number
function fuzzyMatch(num, compare, fuzziness) {
  return Math.abs(compare - num) / num < fuzziness;
}

// Difference in days.
function diffDates(a, b) {
  return (a - b) / 1000 / 60 / 60 / 24;
}
//Given a string version of a number 
function strToNum(str) {
  return parseInt(str, 10);
}
// Array

// Find smallest number greater than min, or NaN if all are smaller.
function minVal(arr, min) {
  return arr.reduce(function(a, b) {
    if(isNaN(a) && b > min) return b;
    else if(b > min) return Math.min(a, b);
    else if(a > min) return a;
    return NaN;
  });
}
//Find the total value of just the numbers in an array, even if some of the items are not numbers.
function total(arr) {
  return arr.reduce(function(a, b) {
    if(typeof b === 'number' && !isNaN(b)) {
      return a + b;
    }
    return a;
  });
}
//Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects
function sortKey(arr, key) {
  return arr.sort(function(a, b) {
    return a[key] - b[key];
  });
}
