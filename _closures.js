/*
Functions are also closures, meaning the function's body have access to variables that are
defined outside that function's body.
*/

let me = "Alessandro";
function greetMe() {                        // 1
    console.log("Hello, " + me + "!");
}

me = "Mauro";                               //2

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

