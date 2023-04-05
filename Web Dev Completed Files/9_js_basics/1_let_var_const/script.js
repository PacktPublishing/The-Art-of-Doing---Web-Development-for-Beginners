//We can display directly to the console.
console.log("Hello world!");

//We can open a window directly on the website to display information.
alert("Welcome to our first script!");

//We can open a prompt directly on the website to get user input.
prompt("How are you doing today?");

/*
    We can define variables using the let and var keywords.
    Once a variable is declared, it does not need to be declared again.
*/
let full_name = "Joe Johnson";
console.log("Given full name is: " + full_name);
full_name = prompt("Enter your full name: ");
console.log("New full name is: " + full_name);

var fav_color;
fav_color = "purple";
console.log("Favorite color is: " + fav_color);
fav_color = prompt("Enter a new favorite color: ");
console.log("New favorite color is: " + fav_color);
/*
    let allows you to declare variables that are limited to the scope of a block statement.
    var declares a variable globally.
    The let keyword is better to work with as we can use a variable within one scope 
    and use it again in another block-scope.
*/
{
    let animal = prompt("Enter an animal: ");
    var food = prompt("Enter a food: ");
}

//Trying to access animal will throw an error as it is only defined in the block statment!
//console.log("The animal you named is " + animal);
console.log("The food you named is " + food);

/*
    A const is a constant variable that cannot be reassigned a new value.
    If we try to reassign a value, we will get an error!
*/
const fav_number = 91;
console.log("My favorite number is " + fav_number + ", this cannot change.");
/*
fav_number = prompt("Enter a new favorite number: ");
console.log("New favorite number is: " + fav_number);
*/