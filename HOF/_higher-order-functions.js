/*
In JS functions are values, can be assigned to a variable or passed into other functions, 
higher order functions.
Higher order functions are functions that take a function as an argument, return a function, 
or both.
*/

let triple = function(x) {
    return x * 3;
}
let waffle = triple;
waffle(30)