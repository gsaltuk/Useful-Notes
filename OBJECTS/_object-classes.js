// uncomment sections to use node to see results \\

/*classes are like templates for objects with the properties we want to transfer to 
similar objects and is useful to create new objects faster.
to create a new class, we start with the keywork "class", followed by the name and braces.
Everytime we create a new class we must make sure the name starts with uppercase:
*/

// class Book {

// }

/* to create a new object, classes need a special method called "constructor()", this
method sets the property values for a new object:
 */

// class Book {
//     constructor() {

//     }
// }

/* to soecify the unique values a new object will have, we need to set parameters to the
constructor method. ex we pass author and title:
 */

// class Book {
//     constructor(author, title) {

//     }
// }

/* before creating a new obj property, we need a keywork "this". we add "this" to refer to
the object being creted, followed by a period "." and the property name. to finis creating
the new obj property, we assign the author param as a value to this.author ...etc:
*/

// class Book {
//     constructor(author, title) {
//         this.author = author;
//         this.title = title;
//     }
// }

/* to use our class, we do the same way yo create a const, but then add the "new" keyword
followed by Book():
*/

class Book {
    constructor(author, title) {
        this.author = author;
        this.title = title;
    }
}

const book1 = new Book("Alessandro Manzoni", "I promessi sposi"); 
//^^^ Then we can add the values we want to set for the new object inside the parentheses
console.log(book1) 
//vvv we can use classes now to create as many books as we want with less code:
const book2 = new Book("Dante Alighieri", "La divina commedia")
console.log(book2)

