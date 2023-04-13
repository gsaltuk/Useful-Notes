

// uncomment/comment-out sections or console.logs to use node to see results \\


/* although instances start from the same class template, they can develop in different ways.
*/

// class User {
//     constructor(name) {
//         this.name = name;
//         this.isOnline = true;
//     }
// }

// const user1 = new User("Alessandro");
// const user2 = new User("Camilla");
// const user3 = new User("Mariomariamario");

/*changing a class affects ALL instances of that class */

// class User {
//     constructor(name) {
//         this.name = name;
//         this.isOnline = true;
//         this.status = name + " hates the rain!" //can be appended to other properties as well
//     }
// }
// const user1 = new User("Alessandro");
// const user2 = new User("Camilla");
// const user3 = new User("Mariomariamario");
// console.log(user1.status)
// console.log(user2.status)
// console.log(user3.status)

/*when changing a class we can change both its properies and its METHODS:
*/

class User {
    constructor(name) {         //the constructor is what creates an instance, also works if is empty "{}", it'll just use the methods
        this.name = name;       //if is not present, the constructor will be created anyway but empty by default
        this.isOnline = true;
        this.status = name + " hates the rain!" 
    }
    sayHi() {
        console.log(`Hello, my name is ${this.name}`) //if constructor is empty returns message plus undefined
    }
}
const user1 = new User("Alessandro");
const user2 = new User("Camilla");
user1.sayHi();
user2.sayHi();

/*other example: with parameterles constructor: */

class Country {
    constructor() {         //constructor is empty but I still can create this.name and when a new object is created the value gets assigned anyway
        this.name = "";
    }
}
const country1 = new Country();
country1.name = "Italy";
console.log(country1);


