console.log("Testing Debugger");

function amIOldEnough(age){
    debugger;
    if (age < 12) {
    debugger;
    return 'No, sorry.';
    } else if (age < 18) {
    debugger;
    return 'Only if you are accompanied by an adult.';
    } else {
    debugger;
    return 'Yep, come on in!';
    } }

  console.log(amIOldEnough(17));
  console.log(amIOldEnough(10));
  console.log(amIOldEnough(23));
  function imaginarySquareRoot(number) {
    'use strict';
    let answer;
    try {
    answer = String(squareRoot(number));
    } catch(error) {
    answer = squareRoot(-number)+"i";
    } finally {
    return `+ or - ${answer}`;
    } }

  function squareRoot(number) {
    'use strict';
    if (number < 0) {
    throw new RangeError('You cannot find the square root of negative numbers')
    }
    return Math.sqrt(number);
    };

    console.log(squareRoot(121));
    console.log(imaginarySquareRoot(-1));
    console.log(imaginarySquareRoot(-49));