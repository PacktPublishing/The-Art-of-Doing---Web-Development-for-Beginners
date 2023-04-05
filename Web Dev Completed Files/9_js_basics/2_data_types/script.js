/*
    We can have many different types of data.
    This includes string, number, boolean, object, and undefined.
*/
let full_name = "Mike Eramo";
let age = 36;
let height = 5.8;
let is_programmer = true;
let fav_language = null;
let lunch;

// We can use the typeof operator to find the data type of a variable.
console.log("The variable full_name which has a value of " + full_name + " is a " + typeof(full_name));
console.log("The variable age which has a value of " + age + " is a " + typeof(age));
console.log("The variable height which has a value of " + height + " is a " + typeof(height));
console.log("The variable is_programmer which has a value of " + is_programmer + " is a " + typeof(is_programmer));
console.log("The variable fav_language which has a value of " + fav_language + " is a " + typeof(fav_language));
console.log("The variable lunch which has a value of " + lunch + " is a " + typeof(lunch));

// We can create our own objects and set attributes to the object.
let my_cat = new Object();
my_cat.name = "Boom";
my_cat.age = 5;
my_cat.is_nice = false;
my_cat.color;

console.log("The variable my_cat is a " + typeof(my_cat));
console.log(my_cat.name + " is a " + typeof(my_cat.name));
console.log(my_cat.age + " is a " + typeof(my_cat.age));
console.log(my_cat.is_nice + " is a " + typeof(my_cat.is_nice));
console.log(my_cat.color + " is a " + typeof(my_cat.color));

// We can create arrays and call specific array methods.
let fav_sports = ["basketball", "football", "soccer"];
console.log(fav_sports);
console.log("The first sport in the list is " + fav_sports[0]);

//We can add elements to the array with the .push() method.
let new_sport = prompt("Enter a new sport: ");
fav_sports.push(new_sport);
console.log(fav_sports);

//We can remove elements from the array with the .pop() method.
let removed_sport;
removed_sport = fav_sports.pop()
console.log("We just removed " + removed_sport);
removed_sport = fav_sports.pop()
console.log("We just removed " + removed_sport);
removed_sport = fav_sports.pop()
console.log("We just removed " + removed_sport);

console.log(fav_sports);