// // While Loops
// // Create a file named while.js in the js directory.
// //
// //     Create a while loop that uses console.log() to create the output shown below.
// //
// //  while allCones = Math.floor
//
// // 2
// // 4
// // 8
// // 16
// // 32
// // 64
// // 128
// // 256
// // 512
// // 1024
// // 2048
// // 4096
// // 8192
// // 16384
// // 32768
// // 65536
// // Do While Loop
// // An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.
// //
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
 //Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones
//     1. Finally, commit the changes to your git repository, and push to GitHub.
//

"use strict";

function multByTwo() {
    let counter = 2;
    while (counter <= 65536) {
        console.log(counter)
        counter = counter * 2;
    }
}

multByTwo();

function makeCustomerOrder() {
    return Math.floor(Math.random() * 5) + 1;
}

function sellingStuff() {
    let totalInventory = Math.floor(Math.random() * 50) + 50;
    do{
        let newCustomerOrder = makeCustomerOrder();
        console.log("Total Inventory is now " + totalInventory)
        //Minus order from inventory if we have enough
        if(totalInventory > newCustomerOrder) {
            totalInventory = totalInventory - newCustomerOrder;
            console.log("Your order was for " + newCustomerOrder + ". Inventory is now " + totalInventory)
        }
        //If we don't have enough for the order, reset the order number?
        if(totalInventory < newCustomerOrder) {
            console.log("Our inventory is " + totalInventory + " and your order is " + newCustomerOrder + ". We can't fulfill")
            newCustomerOrder = makeCustomerOrder();
        }
        //If we hit zero, we sold everything. Get out of while loop!
        if(totalInventory === newCustomerOrder) {
            console.log( "Your order is for " + newCustomerOrder + ". We have exactly " + totalInventory + " left! Congratulations and thank you!")
            totalInventory = 0
        }
    } while(totalInventory > 0)
}
