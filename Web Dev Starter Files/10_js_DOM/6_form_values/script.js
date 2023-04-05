/*
    We can add an event listener directly to a form and listen for a submit event.
    To access the data that is sent via the form we can create a new FormData object attached to THIS form.
*/


/*
    When a form is submitted the page is reloaded. 
    When the page is reloaded usually the current state of the form inputs is lost.
    The preventDefault() method cancels an event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    For example, when clicking on a "Submit" button, it can prevent the form from submitting.
    Now that we have our FormData object to work with we can use a for loop to loop through the data object.
    We can also use the .get() method and pass in the key which is the name we gave in the form to access the form values.
*/
