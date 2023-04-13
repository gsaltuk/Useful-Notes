/*
currying is when a function doesn't take all of it argument upfront but have functions 
as arguments that returns other functions and so on.
*/

let dragon = (name ,size, element) => 
    name + " is a " +
    size + " dragon that breathes " +
    element + "!";

console.log(dragon("Cookie", "giant", "fire"));

// curryied version:
function dragonTwo(name) {
    return function(size) {
        return function(element) {
            return `${name} is a ${size} dragon that breathes ${element}!`;
        }
    }
}

console.log(dragonTwo("Cookie")("giant")("fire"));


