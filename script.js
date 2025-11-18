function add (a,b) {
    return a + b
}

function subtract (a,b) {
    return a - b
}

function divide (a,b) {
    return a/b
}

function multiply (a,b) {
    return a * b
}

let number1 = ""
let number2 = ""
let operator = ""
let result = ""
const operators = ["/", "x", "-", "+"]

function calculate (operator, number1, number2) {
    number1 = Number(number1)
    number2 = Number(number2)
    switch (operator) {
        case "+": 
            return add(number1, number2)
        case "-":
            return subtract(number1, number2)
        case "/":
            return divide(number1, number2)
        case "x":
            return multiply(number1, number2)    
    }
}

function display (value) {
    document.querySelector('.display').textContent = value
}

function cleanVars () {
    number1 = ""
    number2 = ""
    operator = ""
    display("")
}


document.querySelector('.buttons').addEventListener("click", (event) => {
    let value = document.getElementById(event.target.id).textContent
    if (value === "C") {
        cleanVars()
        return
    }
    if (operators.includes(value)) {
        operator = value
        display(operator)
        return
    }
    if (Number.isInteger(Number(value)) && operator === "") {
        number1 = number1 + value
        display(number1)
        return
    }
    if (Number.isInteger(Number(value)) && operator != "") {
        number2 = number2 + value
        display(number2)
        return
    }
    if (value === "=") {
        result = calculate(operator, number1, number2)
        display(result)
        return
    }
    if (result != 0) {
        cleanVars()
        number1 = value
        display(number1)
    } 
})

