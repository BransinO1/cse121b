/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
 function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    const number1 = parseFloat(document.getElementById("add1").value);
    const number2 = parseFloat(document.getElementById("add2").value);

    const sum = add(number1, number2);

    document.getElementById("sum").value = sum;
}
document.getElementById("addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    const number1 = parseFloat(document.getElementById("subtract1").value);
    const number2 = parseFloat(document.getElementById("subtract2").value);
    const difference = subtract(number1, number2);
    document.getElementById("difference").value = difference;
};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const number1 = parseFloat(document.getElementById("factor1").value);
    const number2 = parseFloat(document.getElementById("factor2").value);
    const product = multiply(number1, number2);
    document.getElementById("product").value = product;
};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    if (divisor === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return dividend / divisor;
}

const divideNumbers = () => {
    const dividend = parseFloat(document.getElementById("dividend").value);
    const divisor = parseFloat(document.getElementById("divisor").value);
    try {
        const quotient = divide(dividend, divisor);
        document.getElementById("quotient").value = quotient;
    } catch (error) {
        alert(error.message);
    }
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", function() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);

    const isMember = document.getElementById("member").checked;

    const discount = isMember ? subtotal * 0.2 : 0;

    const total = subtotal - discount;

    document.getElementById("total").textContent = `$ ${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
// Declare and initialize numbersArray
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

// Output Source Array
document.getElementById("array").textContent = numbersArray.join(", ");

// Output Odds Only Array
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById("odds").textContent = oddNumbers.join(", ");

// Output Evens Only Array
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById("evens").textContent = evenNumbers.join(", ");

// Output Sum of Org. Array
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

// Output Multiplied by 2 Array
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById("multiplied").textContent = multipliedArray.join(", ");

// Output Sum of Multiplied by 2 Array
const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;

