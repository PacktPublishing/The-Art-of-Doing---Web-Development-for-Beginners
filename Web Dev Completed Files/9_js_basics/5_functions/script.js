/*
    A function declaration consists of the function keyword, followed by the name of the 
    function, then a list of parameters to the function enclosed in parentheses and separated 
    by commas.

    The function body is enclosed in curly brackets, {} and holds all code to be run
    when the function is called.

    To call a function, simply type the function name and pass the appropriate arguments.
*/

// Writing a function declaration
function sayHello(){
    console.log("Hello World!");
    console.log("Have a great day!");
}

// Calling a function
sayHello();
sayHello();

// Writing a function declaration with paramaters.
function sayHi(name, mood){
    alert("Hello " + name);
    alert("I understand you are " + mood);
}

// Calling the function
let userName = prompt("What is your name: ");
let userMood = prompt("What is your mood: ");
sayHi(userName, userMood);

// Writing a function with a return value.  
function addFive(number){
    alert("Adding 5 and " + number);
    return number + 5;
    alert("This will not run because we've used a return and the function stops!");
}

// Calling funciton and getting the return value.
let myNumber = parseInt(prompt("Enter a number: ")); //parseInt() or parseFloat()
console.log(typeof(myNumber));
let sum = addFive(myNumber);
alert(sum);

/*
    We can use functions that are part of built in objects, like Math!
    Math.random() will create a float from 0 up to 1.
    We can multiply by any integer to create a random float!
    Math.floor() will return the integer part of any float.
    We can use Math.floor() to turn our random floats into random integers!
*/
let randValue
for (let i = 0; i < 10; i++){
    randValue = Math.random()*10;
    console.log(randValue);
}

let randInt
for (let i = 0; i < 100; i++){
    randInt = Math.floor(Math.random()*11);
    console.log(randInt);
}