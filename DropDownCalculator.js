var button = document.getElementById("submitButton");
var num1, num2, answer;
var dropDown = document.getElementById("DropdownMenu1");
var input1 = document.getElementById("Number1");
var input2 = document.getElementById("Number2");
var display = document.getElementById("Answer");
button.addEventListener("click", doMath);

function doMath() {
    if (dropDown.value == "+") {
        num1 = parseInt(input1.value);
        num2 = parseInt(input2.value);
        answer = parseInt(num1) + parseInt(num2);
        display.innerHTML = answer;
    } 
    else if (document.getElementById("DropdownMenu1").value == "-") {
        num1 = parseInt(input1.value);
        num2 = parseInt(input2.value);
        answer = parseInt(num1) - parseInt(num2);
        display.innerHTML = answer;
    } 
    else if (document.getElementById("DropdownMenu1").value == "x") {
        num1 = parseInt(input1.value);
        num2 = parseInt(input2.value);
        answer = parseInt(num1) * parseInt(num2);
        display.innerHTML = answer;
    } 
    else if (document.getElementById("DropdownMenu1").value == "÷") {
        num1 = parseInt(input1.value);
        num2 = parseInt(input2.value);
        answer = parseInt(num1) / parseInt(num2);
        display.innerHTML = answer;
    } 
    else if (document.getElementById("DropdownMenu1").value == "^") { //This is supposed to do powers. The first number to the power of the second number.
        answer = undefined;
        num1 = parseInt(input1.value);
        num2 = parseInt(input2.value);

        for (var i = 0; i < num2; i++) {
            if (answer === undefined) answer = 1;
            answer = answer * num1;
        }

        display.innerHTML = answer;
        answer = undefined;
    } 
    else if (document.getElementById("DropdownMenu1").value == "%") { //This function is supposed to calculate the percent of number 2. The first number is what percent  
        num1 = parseInt(input1.value);
        num2 = parseInt(input2.value);
        answer = (parseInt(num1) * 0.01) * parseInt(num2);
        display.innerHTML = answer;
    }
}