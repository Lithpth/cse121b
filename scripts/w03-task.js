/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

// Declaring functions
function add (number1, number2){
    // function body
    return number1 + number2; //returns sum of parameters
}
// Addition function
function addNumbers (add1,add2){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1,addNumber2);

}


document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

const subtract = function (number1,number2) {
    return number1-number2;
}
const subtractNumbers = function (subtract1,subtract2) {
    
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1,subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = (factor1,factor2) => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1,multiplyNumber2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide (number1, number2){
    // function body
    return number1 / number2; //returns sum of parameters
}
// divide function
function divideNumbers (dividend,divisor){
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divideNumber1,divideNumber2);

}


document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
const currentDate = new Date();

let currentYear;
currentYear = currentDate.getFullYear();

document.getElementById('year').value = currentYear;

/* ARRAY METHODS - Functional Programming */


let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.getElementById('array').textContent = numbersArray.join(', ');

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.getElementById('odds').textContent = oddNumbers.join(', ');

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers.join(', ');

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0); // 0 is the initial value of sum
document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
