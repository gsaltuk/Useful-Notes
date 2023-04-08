/*
.filter() is a function on the ARRAY that accepts another function as it's argument and 
return a new Filtered version of the original array.

.filter() loops through each item of the array, and for each item is going to pass it into
the callback function that return either true or false, whether that item should be or not
in the new filtered array.

*/

const animals = [
    { name: "Fluffy",   species: "rabbit" },
    { name: "Caro",     species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold",   species: "fish" },
    { name: "Ursula",   species: "cat" },
    { name: "Jimmy",    species: "fish" }
];

// // if implementing a for loop would be:
// let dogs = [];
// for (let i = 0; i < animals.length; i++) {
//     if (animals[i].species === "dog") {
//         dogs.push(animals[i]);
//     }
// }

// with the FILTER method instead:

let isDog = function(animal) {    
    return animal.species === "dog";
}

let dogs = animals.filter(isDog); 

console.log(dogs)
