function calculate() {
    // Get input values
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    const calculatebutton = document.getElementsByClassName("button");
    const resultInput = document.getElementById("result");

   

    // Perform calculation based on selected operator
    let result;
    switch (operator) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operator";
            break;
    }

    // Display the result
    document.getElementById("result").value = result;
}

//clear the data
function cleardata(){
    document.getElementById("result").value = "";
}



