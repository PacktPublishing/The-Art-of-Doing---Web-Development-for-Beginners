/*
    The Document Object Model (DOM) is a programming interface for web documents.
    Scripts are written in JavaScript, but use the DOM to access the HTML document and its elements.
    The DOM is not a programming language, but without it, the JavaScript language 
    wouldn't have any notion of web pages, HTML documents, and their component parts. 
    The document as a whole, all elements in a document are parts of the DOM for that document. 
    They can all be accessed and manipulated using the DOM and a scripting language like JavaScript.
*/

/*
    We can access elmenets of the HTML document using the getElementById method.
    In order to use this method we MUST give our HTML elements unique IDs.
    For example, We had to give our <main> tag an id of 'my_main'.
    We can use getElementById on our document and pass in the id to access the element.
*/
const my_main = document.getElementById("my_main");

/*
    Now that we have access to our main tag
    We can create elements for the document and appened them to our main tag.
*/
const new_heading = document.createElement("h2");
const new_paragraph = document.createElement("p");
my_main.append(new_heading);
my_main.append(new_paragraph);

// We can alter the text of these new elements using innerText or innerHTML attributes.
new_heading.innerText = "This is my <b>brand new</b> heading!";
new_paragraph.innerHTML = "This is my <b>brand new</b> paragraph!";

// We can access other elements from our HTML document by their id using getElementById.
const original_heading = document.getElementById("original_heading");
const old_paragraph = document.getElementById("original_paragraph");

// We can now alter or remove these elements.
original_heading.innerHTML = "We are using getElementById!!! We've updated this text!";
old_paragraph.remove();

// We can get and set attributes of our elements.
console.log(original_heading.getAttribute("id"))
original_heading.setAttribute("class", "updated");

/*
    We can access entire classes of elements from our HTML document using getElementByClassName.
    This will return an array that we can loop over!
*/
const fake_text = document.getElementsByClassName("fake_text");
for (text of fake_text){
    //text.setAttribute("style", "color:orange; background:blue");
    text.style.color = "red";
    text.style.background = "green";
    text.innerHTML = "Now we understand how the DOM works!";
}
