/*
    JavaScript can be executed when an event occurs.
    Example events include clicking a mouse, a webpage loading, image loading, mouse hovering,
    input field change, form submitted, user pressing a key, etc...
    The addEventListener() method attaches an event handler to a given element.
    The first parameter is the type of the event (like "click" or "mousedown").
    The second parameter is the function we want to call when the event occurs.
    We can pass information about the given event to the function.
*/
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

const click_coords = document.getElementById("click_coords");
const hover_coords = document.getElementById("hover_coords");

/*
    To begin, we will declare and write our funcitons inside our click listeners.
    We often pass a reference to the event we are calling to the function.
    We can call this reference anything we want 
    but a lot of times you will see it called e for event handling function.
*/

// Adding a click listener to a button.
let click_count = 0;
btn1.addEventListener("click", function(my_event){
    click_count ++;
    alert("Hey, you have clicked the first button " + click_count + " times!");
    console.log(my_event);
})

// Adding multiple listeners to a single element.
btn2.addEventListener("mouseenter", function(e){
    btn2.innerHTML = "You have entered the button!";
    console.log(e);
})

btn2.addEventListener("mouseleave", function(e){
    btn2.innerHTML = "You have left the button!";
    console.log(e);
})

/*
    We can write our function seperatly and then target it with an EventListener.
    We can refernce the element the listener is attached to with the this keyword.
*/
function putName(e){
    let name = prompt("What is your name?");
    this.innerHTML = name;
    this.setAttribute("style", "background:blue; color:white");
    console.log(e)
}

btn3.addEventListener("click", putName);
btn4.addEventListener("click", putName);

// We don't have to use setAttribute, we can change the style directly.
function changeColor(e){
    let colors = ["blue", "yellow", "white", "red", "green", "orange", "pink"];
    var randomColor = colors[Math.floor(Math.random()*colors.length)];
    this.style.backgroundColor = randomColor;
}

btn5.addEventListener("click", changeColor);

// We can access informaiton about our event!
function getCoordsOfClick(e){
    click_coords.innerHTML = "You clicked at x: " + e.clientX + ", y: " + e.clientY;
    console.log(e);
}

function getCoordsOfHover(e){
    hover_coords.innerHTML = "Your current location is x: " + e.clientX + ", y: " + e.clientY;
    console.log(e);
}

document.addEventListener("click", getCoordsOfClick);
document.addEventListener("mousemove", getCoordsOfHover);
