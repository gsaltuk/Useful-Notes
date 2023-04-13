// uncomment sections to use node to see results \\

/* 1_ adding a method in a class is like creating a regular function, except there's no need to
type the "function" keyword.
inside the braces, methods work like normal functions, now console.log display a message
when "eat()" is called, but before let's create a new obj from the class VirtualPet:
*/
// class VirtualPet {
//     constructor(name) {
//         this.name = name;
//     }
//     eat() {                        //eat() is the method of VirtualPet's class
//         console.log("gnam gnam")
//     }
// }

//create new class first:

// const pet = new VirtualPet ("Kuky");
// pet.eat()

/* 2_ paramethers allow class methods to be more interactive by reacting to things we give 
them, with an if statement, the object we create is able to react to the type of food passed to "eat()".

*/
class VirtualPet {
    constructor(name) {
        this.name = name;
    }
    eat(food) {  
        if (food === "treats")  {
            console.log("gnam gnam");
        } else {
            console.log("discard");
        }                  
    }
}

const pet = new VirtualPet ("Kuky");
pet.eat();          //this will log discard as nothis is passed that is === to "treats"
pet.eat("treats");  //this will log the wanted message then "treats" is passed
//each new object of VirtualPet class we crete will be able to use the "eat()" method

// 3_ other example:

class Inventory {
    constructor(size) {
        this.size = size;
    }
    increase(unit) {
        this.size += unit;
    }
}

const bag = new Inventory(0)
//keep adding to the size by repetedly calling the class "bag" with new values
bag.increase(420);
bag.increase(69);
console.log(bag);

       