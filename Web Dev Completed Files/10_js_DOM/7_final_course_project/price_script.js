const reg_input = document.querySelector("#quantity_1");
const xl_input = document.querySelector("#quantity_2");
const tool_btn = document.querySelector("#tool_btn");
const tool_headings = document.querySelectorAll("#tool_values h3");

const taxRate = .08;

tool_btn.addEventListener("click", function(e){
    let subtotal = reg_input.value*10 + xl_input.value*12;
    let tax = subtotal*taxRate;
    let total = subtotal + tax;

    tool_headings[0].innerHTML = "Subtotal: $" + subtotal;
    tool_headings[1].innerHTML = "Tax: $" + tax;
    tool_headings[2].innerHTML = "Total: $" + total;
})

