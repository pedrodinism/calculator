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

let number1 = 0
let number2 = 0
let operator = ""

function calculate (operator, number1, number2) {
    switch (operator) {
        case "+": 
            add(number1, number2)
            console.log("called add")
            return
        case "-":
            subtract(number1, number2)
            console.log("called subtract")
            return
        case "/":
            divide(number1, number2)
            console.log("called divide")
            return 
        case "*":
            multiply(number1, number2)
            console.log("called multiply")
            return        
    }
}