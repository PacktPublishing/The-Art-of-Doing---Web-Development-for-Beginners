/*
    For loops are perfect for running a section of code a set number of times.
    We must give a starting iterable value, ending iterable value, and step.
*/
for (let i = 0; i < 10; i++){
    console.log("Hello World!");
    console.log("Current for loop interable index is " + i);
}

for (let j = 10; j > 0; j--){
    console.log("Goodbye World!");
    console.log("Current for loop interable index is " + j);
}

let even = prompt("How many even numbers would you like to display: ");
for (let i = 2; i <=even*2; i+=2){
    console.log("Even Number: " + i);
}

let odd = prompt("How many odd numbers would you like to display: ");
for (let j = 1; j <=odd*2; j+=2){
    console.log("Odd Number: " + j);
}

/* 
    For-of loops loop through the values of an iterable object such as an array.
    Here, each iteration of the loop we will get a different value from our iterable array.
*/
let names = ["Bob", "Joe", "Mary", "Jill", "Ben"];
for (let name of names){
    console.log(name + " is one of my good friends.")
}

let colors = ["purple", "green", "gold"];
for (let color of colors){
    console.log("I like the color " + color);
}

// While loops are perfect for running a section of code as long as a statement is True.
let i = 0;
while (i < 5){
    console.log("The current while loop iterable is " + i);
    i++;
}

let state = "yes";
while (state == "yes"){
    state = prompt("Do you want to keep looping (yes/no): ");
    console.log("Alright, let's do this!");
}
console.log("Thank you for looping!");
