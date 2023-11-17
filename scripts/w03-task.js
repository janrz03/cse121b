/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2)
{
    return number1 + number2;

}
function addNumbers()
{
    let AddNumber1 = Number(document.querySelector('#add1').value);
    let AddNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(AddNumber1, AddNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (subtract1, subtract2)
{
    return subtract1 - subtract2;

}
function subtractNumbers()
{
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subNumber1, subNumber2);

}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
multiply = (factor1,factor2) => 
{
    return factor1 * factor2;
} 

multiplyNumbers = () => 
{
    let multNumber1 = Number(document.querySelector('#factor1').value);
    let multNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multNumber1, multNumber2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide (dividend, divisor)
{
    return dividend / divisor;
}

function divideNumbers ()
{
    let divNumber1 = Number(document.querySelector('#dividend').value);
    let divNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divNumber1, divNumber2);
}
document.querySelector('#divideNumbers').addEventListener("click", divideNumbers);

/* Decision Structure */
//function add (subtotal)
//{
 //   return subtotal += subtotal; 
//}

//let sumNum = Number(document.querySelector('#subtotal').value);
//document.querySelector('#add').addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML =  numbersArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number *2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2);