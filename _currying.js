/*
currying is when a function doesn't take all of it argument upfront but have functions 
as arguments that returns other functions and so on.
*/

let dragon = (name ,size, element) => 
    name + " is a " +
    size + " dragon that breathes " +
    element + "!";

console.log(dragon("Cookie", "giant", "fire"));

// //curryied version:
function dragon2(name) {
    return function(size) {
        return function(element) {
            return `${name} is a ${size} dragon that breathes ${element} !`;
        }
    }
}

console.log(dragon2("Cookie")("giant")("fire"));


