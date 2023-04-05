const form_1 = document.querySelector("#form_1");
const form_2 = document.querySelector("#form_2");
const form_3 = document.querySelector("#form_3");
const form_3_message = document.querySelector("#form_3_message");

/*
    We can add an event listener directly to a form and listen for a submit event.
    To access the data that is sent via the form we can create a new FormData object attached to THIS form.
*/
form_1.addEventListener("submit", function(e){
    alert("You submitted something!");
    const data = new FormData(this);
    console.log(data);
})

form_2.addEventListener("submit", function(e){
    alert("You have submitted everything!");
    const data = new FormData(this);
    console.log(data);
})

/*
    When a form is submitted the page is reloaded. 
    When the page is reloaded usually the current state of the form inputs is lost.
    The preventDefault() method cancels an event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    For example, when clicking on a "Submit" button, it can prevent the form from submitting.
    Now that we have our FormData object to work with we can use a for loop to loop through the data object.
    We can also use the .get() method and pass in the key which is the name we gave in the form to access the form values.
*/
form_3.addEventListener("submit", function(e){
    e.preventDefault();

    const data = new FormData(this);
    console.log(data);

    for (value of data){
        console.log(value);
    }

    console.log(data.get("my_username"));

    form_3_message.innerHTML = "Your username of " + data.get("my_username") + ", password of " +
        data.get("my_password") + ", and age range of " + data.get("my_age_range") + " years has been recorded!";
})