const color_form = document.querySelector("#color_form");
const color_btn = document.querySelector("#color_btn");
const color_message = document.querySelector("#color_message");

const birthday_input = document.querySelector("#birthday_input");
const birthday_message = document.querySelector("#birthday_message");

const color_input = document.querySelector("#color_input");
const main = document.querySelector("main");

//Getting values from linked checkboxes within a form.
function getColor(e){
    let fav_colors = [];
    for (let i=0; i < color_form.length; i++){
        if (color_form[i].checked){
            fav_colors.push(color_form[i].value);
        }
    }
    color_message.innerHTML = "You like the following colors: " + fav_colors;
}

color_btn.addEventListener("click", getColor);

//Getting values on the change of an input field
birthday_input.addEventListener("change", function(e){
    birthday_message.innerHTML = "Your birthday is recorded as " + this.value;
})

color_input.addEventListener("change", function(e){
    main.style.backgroundColor = this.value;
})
