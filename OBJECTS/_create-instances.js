// uncomment sections or console.logs to use node to see results \\

/* everytime we create an object from a class we create an "instance" of that class.
*/
class User {
    constructor(name) {
        this.name = name;
        this.isOnline = true;
    }
}
const user1 = new User("Alessandro");
// console.log(user1);
// each instance is indipendent, as they have different memory/reference allocations
const user2 = new User("Camilla");
// console.log(user2);
//changing an instance doesn't affect the other instaces as well ex.change user1 online to false
user1.isOnline = false;
// console.log("now displaying the updated instance to false: ", user1);

//other example:
class Food {
    constructor(name, calories) {
        this.name = name;
        this.calories = calories
    }
}
const mango = new Food("mango", 100)
console.log(mango);
const stickyRice = new Food("sticky rice", 69);
console.log(stickyRice);
const padThai = new Food("pad thai", 420);
console.log(padThai);