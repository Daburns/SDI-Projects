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