/*  .reduce() is a function on the array object, it takes as arguments a callback 
function (sum) and, unlike map and filter, an object "order" (0).
The first time that the callback is run there is no "return value of the previous
calculation". If supplied, an initial value may be used in its place. 
Otherwise the array element "order 1" at index 0 is used as the initial value and iteration 
starts from the next element (index 1 instead of index 0). sum is then order 1 (250).
    _ sum is passed as first argument to the reduce callback. like map and filter, reduce
    also receive the iterated item (order) as second argument of the callback(index 0);
    _ take the sum (is still nothing) that we receive, the initial value, and add (+) 
    the order.amount, so now it becomes 250. second iteration it adds 400 and becomes 650,
    and so on until it finish. */

const orders = [    // orders (array of objects)
    { amount: 250}, // order 1 (object)
    { amount: 400}, // order 2 (object)
    { amount: 100}, // order 3 (object)
    { amount: 325}, // order 4 (object)
];

let totalAmount = "The total is: " + orders.reduce((sum, order) => sum + order.amount, 0);

// let totalAmount = "The total is: " + orders.reduce(function (sum, order) {
//     console.log("The sum is now: ", sum, order);
//     return sum + order.amount;
// }, 0);

// let totalAmount = [];
// for (let i = 0; i < orders.lengt; i++) {
//     totalAmount += orders[i].amount;
// } 
// return totalAmount;

console.log(totalAmount);