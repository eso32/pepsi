/** Function returns the position of only odd/even number in given string.
* @param {string} numbers - String with numbers separated by space
*/
function stringer(numbers){
  var splitted = numbers.split(" "),
      divByTwo = [0,0],
      notDiv = [0,0];

  if(checkTheString(splitted)){  //po sprawdzeniu jest fajnie
    for(var i=0; i<splitted.length; i++){
      if(splitted[i]%2 === 0){
        divByTwo[0]++;
        divByTwo[1]=i;
      } else {
        notDiv[0]++;
        notDiv[1]=i;
      }
    }

    if(notDiv[0]===1) return notDiv[1]+1;
    else if(divByTwo[0] === 1) return divByTwo[1]+1;
    else return 'Something went wrong...';
  }
}

/** Function checks if given string is correct according to following conditions: <br />
* 1. Checks if number of elements in an array is greater then 2<br />
* 2. Checks if given element of array is a number using function isNumber
* @param {array} a - Array of numbers to be checked
*/
function checkTheString(a){
  if(a.length<=2){
    console.log("String is too short!");
    return false
  }
  for(var i=0; i<a.length; i++){
    if(!isNumber(a[i])){
      console.log("You can use only numbers!");
      return false;
    }
  }
  return true;
}

/** Function checks if argument is a number and returns true if it is or false if it is not. Function uses Java Script's Regular Expression.
* @param {number} n - Number to check
*/
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
