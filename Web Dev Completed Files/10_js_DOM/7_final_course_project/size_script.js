const feet_input = document.querySelector("#feet");
const inches_input = document.querySelector("#inches")
const pounds_input = document.querySelector("#pounds");
const tool_btn = document.querySelector("#tool_btn");
const tool_headings = document.querySelectorAll("#tool_values h3");

tool_btn.addEventListener("click", function(e){
    let size;

    if (feet_input.value < 5){
        size = "Small";
    }
    else if (feet_input.value < 6){
        if (pounds_input.value < 100){
            size = "Small";
        }
        else if (pounds_input.value < 150){
            size = "Medium";
        }
        else if (pounds_input.value < 200){
            size = "Large";
        }
        else{
            size = "Extra Large";
        }
    }
    else {
        if (pounds_input.value < 150){
            size = "Large";
        }
        else{
            size = "Extra Large";
        }
    }

    tool_headings[0].innerHTML = "You are " + feet_input.value + " feet " + inches_input.value + " inches and weigh " + pounds_input.value + " pounds.";
    tool_headings[1].innerHTML = "We recommend a " + size + ".";
})
