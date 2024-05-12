
function calculate(a, b, operator) {

    if (operator === "+") {
        console.log(a + b)
    }
    if (operator === "-") {
        console.log(a - b)
    }
    if (operator === "*") {
        console.log(a * b)
    }
    if (operator === "/") {
        console.log(a / b)
    }

}

const arr = [2, 3, "+"];

const sum = calculate.apply(null , arr)

