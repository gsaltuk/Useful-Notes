/*
Functions are also closures, meaning the function's body have access to variables that are
defined outside that function's body.
A closure is the combination of a function bundled together (enclosed) with references 
to its surrounding state (the lexical environment). In other words, a closure gives you 
access to an outer function's scope from an inner function. In JavaScript, 
closures are created every time a function is created, at function creation time.
*/

let me = "Alessandro";
function greetMe() {                        // 1
    //console.log("Hello, " + me + "!");
}

me = "Mauro";                               // 2

greetMe();

/* 
1_ the function have no arguments (), but is directly referring to the 
variable "me" from the outside of the function's scope. it can do this
because JS functions like greetMe are CLOSURES. Otherwise the greetMe() would
have "me" as argument and not as an external variable: 
            
                    function greetMe(me) {
                        console.log("Hello, " + me + "!");
                        }
                        
                    greetMe("Alessandro");

2_ if we reassign the variable "me" to a new value "Mauro" for example, 
the function will say Hello Mauro!, meaning it reads the reassigned variable from the
outside of it's scope.
*/

function makeFunc() {           // 3.    
    const name = "Alessandro";  // 3.5.   
    function displayName() {    // 4.    5.5.     6.
      console.log(name);        // 7.
    }
    return displayName;         // 0.    4.5. can't display the name because it has been declared already.3.5.
}
                                  
const myFunc = makeFunc();      // 1.    2.5.
myFunc();                       // 2.    5.      
/*
0.  the displayName() inner function is returned from the outer function before being executed.

Steps:

1.  makeFunc() is declared, which defines a parent function that contains an inner 
    function displayName().
2.  myFunc() is called, which invokes makeFunc() and assigns the returned displayName() 
    function to the variable myFunc, which is undefined at the moment.2.5.
3.  makeFunc() executes and defines a constant variable name with the value "Alessandro" 
    in its scope.3.5.
4.  makeFunc() returns the displayName() function, but does not immediately execute it.4.5.
    <> console.log can't be executed because the function is not being returned yet <>
5.  myFunc() is invoked, which calls the displayName() function that was returned from 
    makeFunc().5.5.
6.  displayName() function, which is the inner function defined within makeFunc(), 
    is executed as it is called by myFunc().
7.  console.log(name) statement within displayName() is executed, which logs the value of 
    name ("Alessandro") to the console.

  The reason is that functions in JavaScript form closures. A closure is the combination of 
a function and the lexical environment within which that function was declared. 
This environment consists of any local variables that were in-scope at the time the closure 
was created. In this case, myFunc is a reference to the instance of the 
function displayName that is created when makeFunc is run. 
The instance of displayName maintains a reference to its lexical environment, 
within which the variable name exists. For this reason, when myFunc is invoked, 
the variable name remains available for use, and "Alessandro" is passed to console.log.

*/
function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
  
/*
In this example, we have defined a function makeAdder(x), that takes a single argument x, 
and returns a new function. The function it returns takes a single argument y, and returns 
the sum of x and y.

In essence, makeAdder is a function factory. It creates functions that can add a specific 
value to their argument. In the above example, the function factory creates two new 
functions—one that adds five to its argument, and one that adds 10.

add5 and add10 both form closures. They share the same function body definition, 
but store different lexical environments. In add5's lexical environment, x is 5, 
while in the lexical environment for add10, x is 10.
*/
