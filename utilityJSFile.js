// First Function: concatenation 
// In which we accept text as input and print it by concatenating with other text.
function concatenation(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to Georgian @ Ilac College`);
}

// Second Function: conversion
// return a value of conversion, accepting meter value as parameter and converting it into cm
function conversion(meter){
    return meter * 100;
}

// Third Function: mathFormula
// It accepts two values and then return the result of addition by applying a math formula.
function mathFormula(a, b){
    return a + b;
}

// Fourth Function: evenOrOdd
// This function takes a value and return whether the value is even or odd
function evenOrOdd(value){
    if (value % 2 == 0) {
        return 'EVEN';
    } else {
        return 'ODD';
    }
}

// The module.exports object is used to export values from that module(JS File)
// making it accessible for use in other modules that import it.
module.exports = {
    concatenation,
    conversion,
    mathFormula,
    evenOrOdd
};