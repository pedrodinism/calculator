function add (a,b) {
    return Math.round((a + b) * 100) / 100
}

function subtract (a,b) {
    return Math.round((a - b) * 100) / 100
}

function divide (a,b) {
    if (b === 0) {
        return "ERROR: attempted to divide by 0"
    }
    else {
        return Math.round(a/b * 100) / 100
    } 
    
}

function multiply (a,b) {
    return Math.round(a * b * 100) / 100
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
    if (value === undefined) {
        if (number1 != "" && operator === "") {
            document.querySelector('.display').textContent = number1
            return
        }
        if (number1 != "" && operator != "" && number2 === "") {
            document.querySelector('.display').textContent = number1 + " " + operator     
            return       
        }
        if (number1 != "" && operator != "" && number2 != "" && result === "") {
            document.querySelector('.display').textContent = number1 + " " + operator + " " + number2
            return  
        }
        if (number1 != "" && operator != "" && number2 != "" && result != "") {
            document.querySelector('.display').textContent = number1 + " " + operator + " " + number2 + " = " + result
            return
        }        
    }
    else {
        document.querySelector('.display').textContent = value
        return
    }

}

function cleanVars () {
    number1 = ""
    number2 = ""
    operator = ""
    result = ""
    display("")
}



document.querySelector('.buttons').addEventListener("click", (event) => {
    let value = document.getElementById(event.target.id).textContent
    if (value === "C") {
        cleanVars()
        return
    }
    if (operators.includes(value) && result === "" && number2 === "") {
        operator = value
        display()
        return
    }
    if (operators.includes(value) && result === "" && number2 != "") {
        number1 = calculate(operator, number1, number2)
        operator = value 
        number2 = ""
        display()
        return
    }
    if (Number.isInteger(Number(value)) && operator === "" && result === "") {
        number1 = number1 + value
        display()
        return
    }
    if (Number.isInteger(Number(value)) && operator != "" && result === "") {
        number2 = number2 + value
        display()
        return
    }
    if (value === "=" && number1 != "" && number2 != "" && operators.includes(operator)) {
        result = calculate(operator, number1, number2)
        display()
        return
    }
    if (result != "") {
        if (Number.isInteger(Number(value))) {
            cleanVars()
            number1 = value
            operator = ""
            number2 = ""
            result = ""
            display()
            return
        }
        if (operators.includes(value)) {
            number1 = result
            operator = value
            number2 = ""
            result = ""
            display()
            return
        }
    } 
})

