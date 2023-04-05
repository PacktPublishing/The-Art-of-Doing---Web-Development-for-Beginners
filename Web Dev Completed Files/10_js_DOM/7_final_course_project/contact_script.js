const contact_form = document.querySelector("#contact_form");
const contact_message = document.querySelector("#contact_message");

contact_form.addEventListener("submit", function(e){
    e.preventDefault();

    const data = new FormData(this);

    if (data.get('preferred_method') == 'email'){
        contact_message.innerHTML = "Thank you " + data.get("my_name") + "! Someone will reach out to you via email at " +
        data.get("my_email") + " around " + data.get("my_time") + ".  Talk to you soon!";
    }
    else{
        contact_message.innerHTML = "Thank you " + data.get("my_name") + "! Someone will reach out to you via phone at " +
        data.get("my_phone") + " around " + data.get("my_time") + ".  Talk to you soon!";
    }
})