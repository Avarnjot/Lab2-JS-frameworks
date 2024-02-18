
// const: this declares all the functions as constants, that their values can't be reassigned
// {function names}: this extracts specific functions.
// Require will import entire javascript file and return object/functions representing module.export
const { concatenation, conversion, mathFormula, evenOrOdd } = require('./utilityJSFile');


// Calling the exported functions with parameters
concatenation('Avarnjot', 'Singh');
console.log(conversion(0.05));
console.log(mathFormula(10, 10));
console.log(evenOrOdd(10));