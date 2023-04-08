/*
similar to filter, is a higher order function, it iterates through an array of objects
for example and return a new array but with mutated/transformed objects.
*/

const animals = [
    { name: "Fluffy",   species: "rabbit" },
    { name: "Caro",     species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold",   species: "fish" },
    { name: "Ursula",   species: "cat" },
    { name: "Jimmy",    species: "fish" }
];

// if using a for loop:
const names = [];
for (let i = 0; i < animals.length; i++) {
    names.push(animals[i].name);
}
console.log(names);

// using MAP array method:
const names2 = animals.map(function(animal) {
    return animal.name + "is a " + animal.species;
});
console.log(names2);

// shorter version:
const names3 = animals.map(animal => animal.name + "is a " + animal.species);
console.log(names3);


